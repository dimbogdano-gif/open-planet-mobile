# Additional 3D model credits

These open models are bundled locally, so playing the game does not require
creating an account or staying connected to an asset website.

## Penthouse furniture

- Local files: `interior/quaternius/*.obj`
- Models: selected furniture from **Ultimate House Interior Pack**, by Quaternius
- Source: https://opengameart.org/content/lowpoly-house-interior-pack
- License: CC0 1.0 (public domain)
- License text: https://creativecommons.org/publicdomain/zero/1.0/

## Detailed player character — Urban Human

- Source: https://github.com/UMRAM-Bilkent/supine-human-model
- Original author: Quaternius (prepared for the repository by UMRAM, Bilkent University)
- Local file: `characters/urban-human.glb`
- License: CC0 1.0 (public domain)
- License text: https://creativecommons.org/publicdomain/zero/1.0/

The game shows its small rounded character only while this model is downloading
or if loading fails. It is hidden as soon as the rigged human is ready, so the
two character bodies are never drawn on top of one another.

## Apartment sofa — Glam Velvet Sofa

- Creator: Eric Chadwick / Wayfair, LLC
- Source: https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/GlamVelvetSofa
- Local file: `interior/glam-velvet-sofa.glb`
- License: Creative Commons Attribution 4.0
- License text: https://creativecommons.org/licenses/by/4.0/

The sofa is a single detailed PBR asset in the apartment rather than many
separate high-detail furniture assets, which preserves frame rate.

## Apartment chair — Sheen Chair

- Creator: Eric Chadwick / Wayfair, LLC
- Source: https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/SheenChair
- Local file: `interior/sheen-chair.glb`
- License: CC0 1.0 (public domain)
- License text: https://creativecommons.org/publicdomain/zero/1.0/

The chair complements the sofa in the home office while keeping the rest of
the apartment lightweight enough for a small computer.

## Island Rescue helicopter body

- Model: "Helicopter" by Gigantic Burger
- Source: https://sketchfab.com/3d-models/helicopter-ef70283b1dea4ae8b18eec9231ce390e
- Local file: `aircraft/helicopter-body.glb`
- License: Creative Commons Attribution 4.0
- License text: https://creativecommons.org/licenses/by/4.0/

The original main and tail rotors are removed when the model loads. Open
Planet supplies its own animated main and tail rotors for the playable vehicle.

## Small civilian aircraft and city building

- Models: **SmallPlane** from Quaternius Airplane Pack and **Building_Medium_2** from Downtown City MegaKit
- Creator: Quaternius
- Prepared web versions: https://github.com/anshaneja5/skyline-run/tree/main/public/assets/models
- Local files: `aircraft/small-plane-quaternius.glb`, `buildings/city-medium-quaternius.glb`
- License: CC0 1.0 (public domain)
- License text: https://creativecommons.org/publicdomain/zero/1.0/

The aircraft replaces the generated shell on the three propeller planes while
retaining Open Planet's rotating propeller. The building replaces one central
city tower; its old generated body remains as an offline loading fallback.
