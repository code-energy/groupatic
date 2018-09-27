from setuptools import find_packages, setup


install_requires = ['aiohttp==3.3.2', 'aiohttp-devtools==0.10.1']
tests_require = ['pylava==0.2.1']


setup(
    name='groupatic',
    version='0.0.0',
    packages=find_packages(),
    install_requires=install_requires,
    extras_require={'tests': tests_require, 'dev': tests_require},
)
