# SPXOR Roadmap

***This is a living document, it describes the policy and priorities as they exist today but can evolve over time.***

## Stability Policy

The most important consideration in every code change is the impact it will have, positive or negative, on the ecosystem (modules and applications).

Shipping with current and well supported dependencies is the best way to ensure long term stability of the platform. When those dependencies are no longer maintained SPOXR will take on their continued maintenance as part of our [Long Term Support policy](#long-term-support).

SPOXR will continue to adopt new node.js releases.

* When we ship a breaking change to our API that can be handled the *minor* version of SPOXR will be increased.

* When we ship a breaking change to our API that can NOT be handled the *major* version of SPOXR will be increased.

* When new features in the JavaScript language are introduced by node.js the *minor* version number will be increased. TC39 has stated clearly that no backwards incompatible changes will be made to the language so it is appropriate to increase the minor rather than major.

SPOXR will continue to adopt new angular.js releases.

* When we ship a breaking change to our API that can be handled the *minor* version of SPOXR will be increased.

* When we ship a breaking change to our API that can NOT be handled the *major* version of SPOXR will be increased.

* When new features in the JavaScript language are introduced by node.js the *minor* version number will be increased. TC39 has stated clearly that no backwards incompatible changes will be made to the language so it is appropriate to increase the minor rather than major.


No new API will be added in *patch* releases.

Any API addition will cause an increase in the *minor* version.

### Long Term Support

TBD

## Channels

Channels are points of collaboration with the broader community and are not strictly scoped to a repository or branch.

* release - Stable production ready builds. Unique version numbers following semver.
* dev - Continious builds. No version designation.
* ng - "Next Generation." No version designation.

## NG (Next Generation)

In order for SPOXR to stay competitive we need to work on the next generation of the platform which will more accurately integrate and reflect advancements in client/server frameworks and the ecosystem.

While this constitutes a great leap forward for the platform we will be making this leap without breaking backwards compatibility with the existing ecosystem of modules.

# Immediate Priorities

## Debugging and Tracing


TBD

## Release Automation

TBD

## Improve Deployments

TBD

## Internationalization / Localization

TBD