all: clean install tests
.PHONY: all

VENV_DIR = .venv

clean:
	rm -rf *.egg-info $(VENV_DIR)
	rm -rf node_modules

install:
	python3 -m venv $(VENV_DIR)
	. $(VENV_DIR)/bin/activate &&\
	pip install -e . &&\
	deactivate
	npm install --only=production

install-dev:
	$(MAKE) install
	. $(VENV_DIR)/bin/activate &&\
	pip install -e '.[dev]'
	npm install

tests:
	. $(VENV_DIR)/bin/activate &&\
	pip install -e '.[tests]' &&\
	pylava backend
