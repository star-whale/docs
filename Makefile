dev-all:
	yarn
	yarn start

install-req:
	yarn

build-docs:
	yarn build

lint-docs:
	yarn lint-docs

versioning-docs:
	yarn docusaurus docs:version ${RELEASE_VERSION}
