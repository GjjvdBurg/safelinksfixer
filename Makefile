VERSION = $(shell cat manifest.json | grep '"version":' | tr -d '", ' | cut -d':' -f2)

dist_EXTRA :=   ./manifest.json \
		./icon.png \
		./scripts/background.js \
		./scripts/safelinksfixer.js

.PHONY: all clean

all: safelinksfixer-$(VERSION).xpi

safelinksfixer-$(VERSION).xpi: $(dist_EXTRA)
	zip -r safelinksfixer-$(VERSION).xpi $^

clean:
	rm -f ./safelinksfixer-*.xpi
