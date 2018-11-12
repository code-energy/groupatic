# TODO: Modify docker so that it can be configured to run in production mode.
# TODO: Run the tests via docker.

install-prod:
	python3 -m venv $(VENV_DIR)
	. $(VENV_DIR)/bin/activate &&\
	pip install -e . &&\
	deactivate
	npm install --only=production

tests:
	. $(VENV_DIR)/bin/activate &&\
	pip install -e '.[tests]' &&\
	pylava backend
