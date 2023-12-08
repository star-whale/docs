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
	cp i18n/zh/docusaurus-plugin-content-docs/current.json i18n/zh/docusaurus-plugin-content-docs/version-${RELEASE_VERSION}.json
