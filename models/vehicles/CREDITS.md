# Vehicle model credits

The game keeps procedural fallback bodies for every vehicle. The following
downloaded GLB assets are used when they load successfully.

## Starter sedan — Khronos Toy Car

- Creator: Guido Odendahl (initial car model) and Eric Chadwick (materials and scene)
- Source: https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/ToyCar
- Direct download: https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/ToyCar/glTF-Binary/ToyCar.glb
- License: CC0 1.0 Universal (public-domain dedication)
- License text: https://creativecommons.org/publicdomain/zero/1.0/
- Local file: `khronos-toycar.glb`

This direct-download model replaces the starter sedan's simple generated body.
It keeps its own detailed wheels, glass and shiny paint; no account is needed
to download it.

## GAZelle Next cargo van

- Creator: UralStrong_lybnineg
- Source: https://sketchfab.com/3d-models/gazelle-next-free-6f5f115cb8fc4bb2933b317f505d5708
- Open distribution mirror: https://huggingface.co/datasets/allenai/objaverse
- License: Creative Commons Attribution 4.0
- License text: https://creativecommons.org/licenses/by/4.0/
- Local file: `gazelle-next.glb`

The game uses the model's own detailed body, glass, grille, lights and wheels.

## DAF XF 95 tractor and articulated box trailer

- Tractor creator: Kabourek Roman
- Tractor source: https://sketchfab.com/3d-models/daf-xf-95-1e61dfadf7114ad38076f1a6a871ccf1
- Trailer creator: Chevi01
- Trailer source: https://sketchfab.com/3d-models/truck-trailer-cd9a5677626f4b648a4a3b1e0d9ca5b9
- Open distribution mirror: https://huggingface.co/datasets/allenai/objaverse
- License: Creative Commons Attribution 4.0
- License text: https://creativecommons.org/licenses/by/4.0/
- Local files: `daf-xf95.glb`, `box-trailer.glb`

The game puts the trailer below a fifth-wheel joint, so it can turn behind the
DAF instead of being welded to the cab.

The lightweight tractor cab is a simplified derivative of Kabourek Roman's
DAF XF 95, retaining its exterior panels, glazing, grille and lamp shapes.
The original atlas is analysed offline to separate repaintable red metal
from glass, trim, chrome and lamps. The baked palette under
`tools/reference-atlases/` and `src/world/referenceMeshes/semi-truck.js`
are derivatives under the same CC BY 4.0 attribution. Source interiors,
chassis mechanics and repeated fasteners are omitted; animated game wheels,
fuel tanks, chassis and trailer remain lightweight custom geometry.

## BMW M4 Competition M Package

- Creator: SRT Performance
- Source: https://sketchfab.com/3d-models/bmw-m4-competition-m-package-5c0a2dafb1ad408d9fc9eeef9aee531b
- Download mirror and attribution: https://github.com/coopercodes/bmwGLB
- License: Creative Commons Attribution 4.0
- License text: https://creativecommons.org/licenses/by/4.0/
- Local file: `bmw-m4-competition.glb`

The donor wheel group is omitted. Original lightweight ten-fork alloy geometry
authored offline in tools/reference-bmw-photo-wheels.mjs follows BMW M's viewed
826M wheel photograph: https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-m-wheels.html .
Near and distant rims retain open fork gaps, independent rolling and front steering,
with paint-independent dark alloy finish and shared procedural road-tyre normal map.
Nominal 19-inch front/20-inch rear rims and 380/370 mm brake discs follow the 2021
BMW launch: https://www.press.bmwgroup.com/usa/article/detail/T0317577EN_US/the-new-2021-bmw-m3-sedan-and-m4-coupe .
Rim lip allowance, precise spoke profiles and source tyre dimensions remain
approximations. Tiny BMW wheel logo, machined ribs and calipers are not reproduced.
The manufacturer photograph is linked externally only for comparison, not used as
a game texture or licensed as Creative Commons. Heavy donor GLB is not loaded in
lightweight gameplay. Near/far wheel centres are aligned to prevent detail-switch jumps.

## Porsche 911 Carrera 4S — legacy reference

- Creator: Lionsharp Studios
- Source: https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf
- Distribution source: https://github.com/playcanvas/web-components/tree/main/examples/assets/models
- Attribution documentation: https://developer.playcanvas.com/user-manual/web-components/loading-models/
- License: Creative Commons Attribution-ShareAlike 4.0
- License text: https://creativecommons.org/licenses/by-sa/4.0/
- Local file: `porsche-911-carrera-4s-optimized.glb`

The optimized GLB and `src/world/referenceMeshes/porsche-911.js` are modified
derivatives distributed under CC BY-SA 4.0. Changes include mesh simplification,
removing the presentation plane and source wheels, replacing materials for
repainting, and generating a further simplified distant body. Attribution and
this license apply to these model derivatives.

The source wheels and baked presentation plane are omitted at runtime so the
game can retain its own animated wheels and suspension.

## Porsche 911 Carrera (992) — current lightweight body

- Creator: Márcio Meireles / MMC Works
- Source: https://sketchfab.com/3d-models/porsche-911-992-dd10a7e346a645af8ba80be48b604854
- Author's portfolio: https://marciomeireles.artstation.com/projects/mDzKVd
- Distribution source: https://huggingface.co/datasets/allenai/objaverse (UID `dd10a7e346a645af8ba80be48b604854`)
- License: Creative Commons Attribution-NonCommercial 4.0
- License text: https://creativecommons.org/licenses/by-nc/4.0/
- Local derivative: `src/world/referenceMeshes/porsche-911-992.js`

The author's model is untextured. This derivative simplifies the exterior,
omits hidden interior and original wheel geometry, assigns separate paint,
glass, lens, trim and metal materials, and includes a simpler distant exterior.
Open Planet supplies independently rolling/steering wheels, rubber normal
texture, spokes and fixed brake calipers. Attribution and noncommercial use
requirements apply to this derivative. The original million-triangle model
stays in the offline build cache and is not served to the game.

## Toyota Land Cruiser 200 (2017)

- Creator: David_Holiday
- Source: https://sketchfab.com/3d-models/toyota-land-cruiser-j200-2017-374e85a6e18743429f6d9c0e7bbffb3c
- Open distribution mirror: https://huggingface.co/datasets/allenai/objaverse
- License: Creative Commons Attribution 4.0
- License text: https://creativecommons.org/licenses/by/4.0/
- Local file: `toyota-land-cruiser-200.glb`

The model replaces the former Trophy Truck purchase. The game removes the
source wheel assembly and invisible presentation artwork, fits the body to
4.95 metres, supplies animated wheels, and lightens the cockpit glass.

## Former Trophy Truck 300 asset (retained, no longer used by the catalogue)

- Creator: sterlingjmakara
- Source: https://www.cgtrader.com/free-3d-models/vehicle/truck/offroad-truck
- License: CGTrader Royalty Free License (no AI)
- License terms: https://www.cgtrader.com/pages/terms-and-conditions
- Local file: `trophy-truck.glb`

The ready-made OBJ model and its textures were downloaded from CGTrader and
converted to an optimized GLB. Its separate source wheels are omitted at
runtime so the game can keep steering, wheel spin and long-travel suspension.

## Toyota AE86 Trueno (Tofu Car)

- Creator: Kokori
- Source: https://kokori-studio.itch.io/anime-style-tofu-car
- License: CC0 1.0 Universal
- License text: https://creativecommons.org/publicdomain/zero/1.0/
- Local file: `toyota-ae86-tofu-car.glb`

The archive's bundled license is stored beside the model as
`TOYOTA-AE86-LICENSE.txt`. The packed derivative omits the inverted cartoon
outline that obscured paint, glass and lights. Original rim geometry is
recentered, simplified and attached to the game's independently rolling and
steering wheels, with procedural tyres. The distant body and dark rims are
separate simplified derivatives of the same source.

AE86 dimensional fitting uses Toyota's official 1983 vehicle history for the
2400 mm wheelbase: https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60009032/.
The existing 4215 mm later bumper length is retained. Stock front/rear track
targets 1355/1345 mm are listed in the Response GTV hatchback catalogue:
https://response.jp/assistance/catalog/model/TO/S083/F001/M002/G003/.
The retained source tyres and spoke pattern remain aftermarket approximations.
Body and wheel openings are remapped together offline; rims are centred using
the original source tyre centres before attaching to the corrected axles.
Review-only photograph: Collecting Cars, 1985 Toyota AE86 Trueno listing
https://collectingcars.com/for-sale/1985-toyota-ae86-trueno (external comparison,
not a downloaded game texture). The front bumper now has bounded offline additions fitted to that photographed
early hatchback: paired amber/clear lenses, dark housings, a three-slat central
grille and blank plate mounting form (54 triangles). Original near body parts,
fitted axles and source spokes stay unchanged. Lens positions and shapes are
photo-based approximations, not scanned OEM dimensions; stylised panels and
further front/rear details still require fidelity work.
Rear lens partitioning follows the actual early hatchback rear photograph
https://images.collectingcars.com/007878/6IMG-8179.jpg?w=3840&q=50
found in the listing gallery: clear reversing sections inboard, red/amber lower
sections and smoked upper bands. Original sloped lens surfaces are clipped
offline, with interpolated normals; no overlay or downloaded texture. Fitted
section boundaries are approximate photo proportions. Near body/windows/front
parts, axles and rolling rims remain unchanged.

## Toyota Altezza SXE10 BDB

- Creator: takeover (@takeoverteam)
- Source: https://sketchfab.com/3d-models/toyota-altezza-sxe10-bdb-gamerender-ready-c4c34ef6a690489a9db7c76f4d2fb544
- License: Creative Commons Attribution 4.0
- Local file: `toyota-altezza-sxe10-bdb.glb`

The lightweight derivative omits source wheel, brake-disc and caliper nodes
offline. The downloaded five-spoke rim by Blaze is attached to the game's
rolling tyres; its Yamaha emblem is omitted as required by its license.

The donor's Lexus, Lexus symbol and IS300 rear badges are omitted offline.
They are replaced by Toyota and Altezza wordmarks and a lightweight Toyota
symbol with five open regions. Ready outline: [Toyota Symbol.svg](https://commons.wikimedia.org/wiki/File:Toyota_Symbol.svg),
marked public domain on Wikimedia Commons. The SVG contour was converted
offline with Three SVGLoader; gameplay loads the packed triangles only.
The wordmarks use two small, shared canvas textures. Reference photograph:
[Toyota Altezza vehicle history](https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60000174/index.html).
Original front and rear plate-mount meshes are retained as blank dark
surfaces, with the donor's white plastic holders reassigned to dark trim.
The tuned upper grille receives a fitted 40-triangle surface using the
project's shared honeycomb texture to cover malformed donor highlights.
This grille is an approximation for the modified Drift variant; it is
not a reproduction of the standard factory grille. Distant geometry uses
plain dark trim without the grille texture.
Rear lamp colours were reviewed against Toyota's official rear photograph
(`images/s2.png` on that vehicle-history page). Original inner boot lenses
are red with a narrow chrome rim split from the same source faces; outer
clear covers expose chrome housings and the original round red lenses.
Lower outer indicators are amber, and the inner reversing strips stay
clear. Separate distant budgets retain those small coloured sections.
No additional lamp geometry or downloaded runtime textures were added.
Near paint normals are fitted offline with the existing dense-panel helper
within 120 mm; no per-frame smoothing or extra paint faces are added.
The source body, openings, glass and trim are remapped together to Toyota's
published 2670 mm wheelbase while retaining the 4400 mm fitted length.
An approximate 800 mm front overhang preserves the donor's front axle;
that overhang is not an independently verified factory measurement.
Independent rolling rim geometry is retained without the body remapping.
Tyre-centre tracks are fitted to 1495 mm front / 1485 mm rear, and the
procedural tyres use the published 215/45R17 size (215 mm wide, calculated
625.3 mm diameter). Reference: [Toyota RS200 Z Edition, 1998](https://toyota.jp/ucar/catalog/brand-TOYOTA/car-ALTEZZA/199810/1003928/).
The separately attributed five-spoke rims are fitted offline to a 17-inch
bead-seat diameter plus an approximate 12 mm outer lip. The design remains
the attributed donor rim rather than an exact Toyota alloy reproduction.

## Five-spoke car rim

- Creator: Blaze (@blaze26801)
- Source: https://sketchfab.com/3d-models/5-spoke-car-rim-rotoboxyamaha-inspired-89a2f8cd8c9f4351828a54b4a2595c50
- License: Creative Commons Attribution 4.0
- Local file: `altezza-5-spoke-rim.glb`

The lightweight Altezza derivative also uses the five-spoke rim, simplified
offline to about 300 triangles per wheel and mirrored for the opposite side.
The emblem is omitted. Source brake assemblies and hidden mechanical parts
are removed; rims roll with the game's tyres. Its distant body retains the
same sedan shell, lamp covers and independently recolourable paint. Front
lamp housings are assigned neutral metal rather than red, and far front
lenses use an opaque cover with a 3 cm exterior offset to avoid overlap.

## Optimized derivatives

`toyota-altezza-sxe10-bdb-optimized.glb`, `toyota-land-cruiser-200-optimized.glb`
`altezza-5-spoke-rim-optimized.glb`, `bmw-m4-competition-optimized.glb`,
`volvo-s60-offroad-optimized.glb` and `porsche-911-carrera-4s-optimized.glb` are simplified derivatives of the
attributed models above, with the same CC BY 4.0 licenses. Their textures,
materials and node names are preserved. Geometry was simplified with glTF
Transform 4.5.1 and meshoptimizer 1.3.0; reproduce using
`node tools/optimize-vehicle-models.mjs toyota-altezza-sxe10-bdb toyota-land-cruiser-200 altezza-5-spoke-rim bmw-m4-competition volvo-s60-offroad porsche-911-carrera-4s`.

## Draco decoder files

The Porsche asset uses Draco mesh compression. Decoder files are copied from
the installed Three.js package (`examples/jsm/libs/draco/gltf`) and served
locally from `public/models/draco/gltf`.

- Draco project: https://github.com/google/draco
- License: Apache License 2.0

## Lightweight reference-mesh derivatives

The modules in `src/world/referenceMeshes/` are simplified, recolourable derivatives. They omit source textures and presentation objects, use separate paint/glass/lamp materials, and reuse the game's animated wheels. Generate them with `node tools/build-reference-car-meshes.mjs land-cruiser-200 bmw-m4 porsche-911 lada-2107 supra toyota-ae86 defender-110`. Opposite duplicate surfaces were removed before simplification to prevent flickering and broken shading. Existing attribution above applies to BMW, Porsche, Land Cruiser and AE86.

- **Lada 2107 low poly**, Name's_Been_Classified: https://sketchfab.com/3d-models/lada-2107-low-poly-5959908e4e304234b22f3436291cb588 . Source file: `lada-2107-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Changes: simplified geometry, separated recolourable materials, replacement wheels.
  Front-detail revision retains the original 36-face clear headlamp covers and
  164-face reflectors as separate materials, with a small generated ribbed normal
  texture. Added an original 12-face blank front mounting form. The distant
  derivative preserves more original chrome grille geometry and adds a two-face
  dark radiator backing; only distant grille depth is adjusted to prevent the
  simplified painted shell showing through. Reference photograph, shown only in
  the review page: Throwawayacc222, CC0 1.0,
  https://commons.wikimedia.org/wiki/File:2012_VAZ_210740_silver_front.jpg .
  The current derivative also uses original lightweight pressed-steel wheel
  geometry inspired by that photo: eight genuinely open ventilation slots,
  four lug openings, a dished face, rim lip, bolts and centre hub. Each near
  rim has 1,072 triangles; each distant rim has 184. Existing rolling/steering
  assemblies are retained; tyre openings and brake-disc size are fitted to the
  smaller rims. Original donor F1 mirror parts are omitted and replaced with
  original rectangular stock-style housings, stems and reflective panes
  (244 near / 48 distant triangles in total). Photo proportions are an
  approximation, not an assertion of exact factory measurements.
  Rear-detail revision adds an original blank rear mounting form (12 faces),
  thin lamp surrounds fitted to the original lens bounds (16 faces), and a
  generated two-tone LADA 2107 trunk badge with approximate Arial lettering.
  The original hollow exhaust is retained separately: 282 tube faces and its
  64-face annular outlet, with the outlet preserved at distance. Red and amber
  lenses use the shared small ribbed normal texture with projected coordinates.
  Rear reference shown only in the review page: Throwawayacc222, CC0 1.0,
  https://commons.wikimedia.org/wiki/File:2010_Lada_210740_black_rear.jpg .
  Dimensions fitted to AVTOVAZ owner manual (November 2007), figure 51, printed
  page 62: 4145 mm length, 1620 mm body width, 1435 mm roof height, 2424 mm
  wheelbase, 664/1057 mm overhangs and 1365/1321 mm front/rear tracks. Retained
  source body and arches are fitted together; stock-style original mirrors fit
  the 1680 mm overall outline. Source tyre dimensions remain approximate.
  Manual reference: https://expertvaz.ru/wp-content/uploads/lib/VAZ_2105.pdf#page=62 .

- **Low Poly Toyota Supra JZA80 Mark4 1994**, IVA: https://sketchfab.com/3d-models/low-poly-toyota-supra-jza80-mark4-1994-faa54e0bf4df479a87e33e3434a306f2 . Source file: `supra-mk4-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Changes: simplified geometry, separated recolourable materials, replacement wheels.

  The packed Supra derivative now includes separate simplified source rims
  attached to the game's rolling wheel assemblies, a further simplified distant
  shell, and new front/rear lens details projected onto the curved exterior
  during the offline build. The game does not perform that projection while
  driving. Reference photo shown only in the review page: Falcon® Photography,
  https://commons.wikimedia.org/wiki/File:Toyota_E-JZA80_Supra_RZ_(20122616144).jpg,
  CC BY-SA 2.0, https://creativecommons.org/licenses/by-sa/2.0/ .
- **2021 Land Rover Defender 110**, David_Holiday: https://sketchfab.com/3d-models/2021-land-rover-defender-110-26f042fcf1594890a529bfb41f0fae0d . Source file: `defender-110-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Derivative: removed duplicate surfaces, simplified geometry, changed materials, replacement wheels.

Earlier reference sources were obtained from the public Objaverse GLB archive. Source models and derivatives retain their attributed licenses.


- **Nissan Skyline R34 GT-R [COLLAB]**, Mitya Petrov: https://sketchfab.com/3d-models/nissan-skyline-r34-gt-r-collab-ed93a7945368404285b16cffb5888a43 . Source file: `skyline-r34-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Changes: removed source wheels and plate faces, changed materials, fitted independent game wheels.
- **Low Poly Nissan Skyline GT-R R34**, Arifido._: https://sketchfab.com/3d-models/low-poly-nissan-skyline-gt-r-r34-8ecbe8e4e432439fa7159d2e61f6bc9b . Source file: `skyline-r34-alternate-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Stored reference only, not currently used by the game.
- **Ford Mustang GT 2019**, broawz.n.nove: https://sketchfab.com/3d-models/ford-mustang-gt-2019-5b737fd21a5f432080ee32b12cf26a37 . Source file: `mustang-gt-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Changes: simplified geometry, removed source wheels, separated recolourable materials, replacement wheels.

Altezza's lightweight derivative uses the attributed source models listed above. Rebuild the additional derivatives with `node tools/build-reference-car-meshes.mjs mark-ii volvo-s60-offroad skyline-r34 mustang-gt`.

The existing local `volvo-s60-offroad-optimized.glb` has no retained creator,
source URL or license metadata in its GLB or this credit file. Its provenance
must be recovered before describing it as an attributed licensed asset or
distributing it. Local modifications separate rolling source rims from brake
assemblies, preserve round tyres, classify rear lenses separately from window
glass, and build a matching distant sedan body. These changes do not establish
permission for the original model.

Skyline's derivative retains the source spoke geometry as separate rolling
rims (300 triangles per wheel, 75 per distant wheel), with neutral metal
materials. Rear portions of the source turn-light material are reassigned
red to preserve four red round tail lenses; front indicators remain amber.
Its distant coupe body is simplified from the same source. Distant tyres
use equal vertical and longitudinal diameters to remain round.

Mustang's lightweight derivative now retains its original dark multi-spoke
rims as independently rolling geometry, reduced offline to at most 600
triangles per near wheel and approximately 75 per distant wheel. The far
fastback shell derives from the same source body and keeps three separated
red tail bars per side. Headlamp outer glass is a thin transparent coat
over the source reflectors. Source author normals are retained on paint.
Rims are fitted radially to a 19-inch bead-seat diameter with an approximate
12 mm outer lip, and their height-fitting distortion is corrected offline.
Reference: https://performanceparts.ford.com/part/M-1007-M199B

### Additional stored reference sources

- **Zaz 968M**, [Bydosia](https://sketchfab.com/Bidosia): [source model](https://sketchfab.com/3d-models/zaz-968m-d5a9fb0bca914635b3d7eefb48aa27cd), offered under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Official converted GLB downloaded on 2026-10-02; original stored in `tools/.reference-cache/zaz-968m-bydosia.glb`. Changes: assigned reviewed exterior roles, omitted registration lettering and hidden axle parts, retained donor body, two doors, rounded panes, quarter ventilation, round headlights, tail-lamp sections and classic hubcaps. Independently repaintable body; own rounded procedural tyres; original wheel/hubcap meshes attach to rolling and steering pivots. Rebuilt rectangular front indicators from the photograph instead of the donor’s small round bulbs, inboard of the headlamps and outside the nose/trim surface, with a separate budget to avoid collapsing them during simplification; reference [front photograph](https://avatars.mds.yandex.net/get-autoru-vos/1943038/1839b0ce28d5fdaa370315ccf3b2e2b9/1200x900). Simplified near/far geometry and smoothed paint normals; protected small handle/wiper/blank plate geometry budgets. Runtime derivative `src/world/referenceMeshes/zaz-968.js` uses packed geometry; the original heavy GLB is not loaded during gameplay. Rebuild: `node tools/prepare-zaz-source.mjs`, then `node tools/build-reference-car-meshes.mjs zaz-968`.

- **Volga Gaz 3110 LOW POLY**, [Royd45](https://sketchfab.com/Royd45): [source model](https://sketchfab.com/3d-models/volga-gaz-3110-low-poly-5e7e4da8b86c4ab5a1ea833f8b93d1fe), offered under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Official converted GLB downloaded on 2026-10-02; original stored in `tools/.reference-cache/volga-3110-royd45.glb`. Changes: simplified exterior with private body paint, separate glass and lamp colours, omitted inner window backing, independently rolling original photo-based cap geometry with neutral finishes and round procedural tyres. Current clear-lens variant compared with Kirill Borisenko's [front photograph](https://commons.wikimedia.org/wiki/File:GAZ-3110_cherry_colored_(front_view).jpg) and [rear photograph](https://commons.wikimedia.org/wiki/File:GAZ-3110_cherry_colored_(rear_view).jpg), CC BY-SA 4.0. Photographs appear only in the comparison page, not as game textures. Original curved front covers retained; new shallow headlamp bowls, separate clear indicator backing, recessed amber bulbs and blank front plate mount fitted offline. Original rear lenses split into red upper/lower edges and clear lower sections. Original mirror housings recoloured black independently of body paint. Grille retains 54 original dark strips and chrome frame, with a separately fitted simplified far version. Removed two broad donor wing ornaments absent from the photographed grille, preserving its frame and centre post. Actual front/rear rolling centres now follow the 1500/1444 mm tracks in the GAZ factory owner manual 3110-3902008 RE, third edition (1998), [printed page 187](https://djvu.online/file/dTwhY2A0FYnuU). Offline body fitting now follows the same factory table for the 3110 sedan: 4880 mm bumper length, 1800 mm metal body width, 1455 mm roof height and 2800 mm actual wheelbase. Arches and body panels move together; cabin height is fitted above the retained belt, round tyres are preserved, and surface normals are corrected offline. The front overhang and exact panel curves, small emblems and source tyre dimensions remain approximations. Rebuild fitting is tools/reference-volga-dimensions.mjs; both detailed parts and the simplified grille use the same fit. Donor dome hubcaps replaced with original shallow silver cap geometry: seven actual tapered ventilation openings, curved centre, circular outer lip and centre seam, fitted to existing round tyres. Near caps use one bounded offline subdivision of their visible face and analytic pressed-surface normals; distant caps retain all seven openings with fewer faces. Four cap assemblies remain independently rolling and the two front pivots steer. The tiny centre logo is not reproduced. Rebuild of cap geometry is in tools/reference-volga-photo-wheels.mjs. Shared original procedural ribbed lamp normal texture adds detail near the car; distant lamps are opaque and use no normal texture. Original lower-bumper detail now cuts three rounded central intakes and two oval fog-light recesses into the actual source painted triangles, preserving source depth and interpolated normals. Added painted inset walls, recessed dark backing, round fog reflectors and dark circular frames. Distant rendering omits hidden walls and locks the cut boundaries so simplification cannot close the holes. These photo-fitted parts are original geometry, not copied photo textures; proportions remain approximate. Offline rebuild is tools/reference-volga-lower-bumper.mjs through the existing exporter. Runtime derivative `src/world/referenceMeshes/volga-3110.js` uses packed near/far geometry, no original GLB or source textures during gameplay. Rebuild with `node tools/build-reference-car-meshes.mjs volga-3110`.

- **Car Mazda 3 SEDAN 2007**, [giuffridamassimino](https://sketchfab.com/giuffridamassimino): [source model](https://sketchfab.com/3d-models/car-mazda-3-sedan-2007-fc0d99c69bca4ccd98cf7355b4150bdf), offered under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Official converted GLB downloaded on 2026-10-02; original kept in `tools/.reference-cache/mazda3-bk-sedan-giuffridamassimino.glb`. This is the old BK sedan, not the later BM candidate below. Changes: removed the optional rear wing as one separate connected component while retaining the complete boot underneath; smoothed body and pane normals, independently repaintable body, separated glass/lamps/trim, neutral round tyres and original source rims attached to steering/rolling pivots, added a small blank rear plate mounting shape. Roof height is fitted from paint geometry so the aerial cannot squash the body. Packed near/far exterior: `src/world/referenceMeshes/mazda3.js`; no original GLB or source texture loads during gameplay. Rebuild: `node tools/prepare-mazda-source.mjs`, then `node tools/build-reference-car-meshes.mjs mazda3`.

- **Mazda-3**, David_Holiday: https://sketchfab.com/models/0811f0d3785243a5ad05bd1b84457273 . Local file: `mazda3-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . This is a newer Mazda generation; it is not used for the game's Mazda 3 BK.
- **Zaz 968 lowpoly**, Dmitriev Nikita: https://sketchfab.com/models/8793fbfe9ec94110bbf6cca3a71d81c3 . Local file: `zaz-968-reference.glb`. License: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/ . Stored reference under review, not currently used by the game.

The GAZelle lightweight derivative uses the previously attributed GAZelle Next source. Its cargo-van body, wheels and glass were separated; geometry was simplified and made recolourable. The full texture atlas is omitted. Dimensions and wheelbase follow the long cargo van in the manufacturer's brochure: https://www.gazeurope.eu/images/GAZ/Technicka_data_GAZelle/NEXT_KATALOGY/GAZ_NEXT_KOMPLET_KATALOG_AJ.pdf . Rebuild with `node tools/build-reference-car-meshes.mjs gazelle-cargo`. The distant derivative retains source body/window boundaries, simplified opaque trim and round tyre silhouettes; lower cab interior trim is inset to prevent crossing the thin painted door after simplification.

- **Ferrari 488 Pista**, [Ammarico](https://sketchfab.com/Ammarico): [source model](https://sketchfab.com/3d-models/ferrari-488-pista-2ff6367da5f041e8ae9af282517f0607), offered by the uploader under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Official converted GLB download on 2026-10-02. The uploader's license claim is recorded; original authorship and underlying asset rights have not been independently verified. Original retained at `tools/.reference-cache/ferrari-488-pista-ammarico.glb`. Changes: visually classified previously uncoloured exterior parts, removed hidden cabin/engine/brake geometry, retained individual body, doors, mirrors, headlights, ring rear lamps, engine window and aerodynamic openings; simplified near/far exterior, private body paint, independent source rims on steering/rolling pivots, original procedural road tyres. Heavy original is not loaded by gameplay. Rebuild with `node tools/prepare-ferrari-source.mjs` followed by `node tools/build-reference-car-meshes.mjs ferrari-488`. Runtime derivative: `src/world/referenceMeshes/ferrari-488.js`.

- **2020 Porsche Cayenne GTS Coupe**, [tonielpro520](https://sketchfab.com/tonielpro520): [original model](https://sketchfab.com/3d-models/2020-porsche-cayenne-gts-coupe-5bae7080e6e14151a8f74b14573fd8cb), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Downloaded directly through Sketchfab's official glTF download on 2026-10-01. Original archive and license are kept in `tools/.reference-cache/cayenne-source/`. Changes: simplified exterior geometry, omitted detailed interior/brakes and visible registration plate, private repaintable body material, simplified independent source rims attached to steering and rolling pivots, replacement lightweight tyres with an original procedural rubber normal texture. Runtime derivative: `src/world/referenceMeshes/porsche-cayenne.js`; original heavy model is not loaded during gameplay. Rebuild with `node tools/build-reference-car-meshes.mjs porsche-cayenne`.

The packed Cayenne Coupe, Lada 2107, Land Cruiser 200, Defender 110 and BMW M4 derivatives also contain an additional simplified exterior for far-distance rendering, generated offline from the same credited reference geometry. These retain separately coloured opaque windows and lamps, source wheel locations, and private repaintable body colour. Far-distance Cayenne rims are further reduced; its detailed steering/rolling rims remain in the near version. The Land Cruiser derivative removes redundant dark/glass backing beneath painted body panels, preserves its dedicated window surfaces and separates the complete rear pane from roof faces. Defender keeps its original body normals and independently budgeted fixed rear spare tyre/rim geometry at both detail levels. BMW M4 omits hidden engine/interior/dashboard geometry, assigns grille/radiator and carbon trim their dark finish, and separately budgets grille geometry to preserve its twin shape. Thin lamp covers remain transparent near the car and are omitted from the opaque far-distance derivative.

- **Koenigsegg Jesko**, [JUSTGAME](https://sketchfab.com/JUSTGAME): [source model](https://sketchfab.com/3d-models/koenigsegg-jesko-e2071ee5ae7a41509b7edbeac9adf007), offered by the uploader under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Official GLB download on 2026-10-02. The page tags include Asphalt 8; the uploader's claimed license is recorded here and is not independent verification of underlying game-asset rights. Original GLB retained in tools/.reference-cache/jesko-attack-justgame.glb. Derivative: one of two posed source cars retained, neutralized pose, omitted detailed brakes, sampled atlas into separate paint/glass/lamp/trim geometry roles offline, simplified exterior, separately rolling original five-spoke rims and original procedural tyres. Runtime uses packed src/world/referenceMeshes/jesko.js, with no original GLB or source texture decoding during gameplay. Prepare with tools/prepare-jesko-source.mjs, decode the extracted Material.001.png into a 1024px RGB byte array using Pillow, run tools/prepare-jesko-materials.mjs, then tools/build-reference-car-meshes.mjs jesko.

Mustang front-detail derivative (2026-10-03): replaced the donor's Ford oval front emblem with the ready pony vector outline from Ford Mustang Cup Brand Guidelines, issue 1.0, page 6 (https://icclienthub.com/wp-content/uploads/2024/12/2025-Mustang-Cup-Brand-Guidelines-Issue-1.0.pdf). The emblem is a fitted flat metal silhouette with open leg gaps, triangulated offline; Ford marks remain Ford's trademarks. Offline source and extraction script are in tools/mustang-brand-reference.pdf and tools/extract-mustang-pony.py. Front grille uses an original shared procedural honeycomb texture on the existing lightweight exposed backing; the distant version omits that texture. Gameplay does not load the source PDF or GLB.

Mustang panel lighting (2026-10-03): dense source paint normals are fitted offline to nearby similarly facing panel samples after the original triangle selection. The near packed positions, faces, wheel geometry and axle metadata are unchanged; only painted-body normals change. Rebuild uses tools/reference-panel-normals.mjs through the existing car-mesh builder. No normal fitting runs during gameplay.

Mustang lower intake (2026-10-03): original lightweight eight-triangle curved backing and eight-triangle sloping lip fitted to the donor bumper using the observed 2019 GT front photo (https://www.torquenews.com/sites/default/files/images/2019_ford_mustang_gt_front_end_close.jpg). The centre uses the existing original shared procedural honeycomb texture near the car; the far version uses plain trim. Fitting is offline in tools/reference-front-details.mjs; original donor side blades and painted bumper remain.

Mustang headlamp details (2026-10-03): using the same front photograph, separated 80 original outer reflector triangles into amber material and reassigned the 936-triangle original headlamp backing to dark trim. Removed one extra source light bar per side (24 source triangles) to keep three white bars per lamp. Metal lens surrounds remain chrome; positions of retained faces remain unchanged. Offline processing in tools/reference-front-details.mjs, with existing paint-independent game materials and bounded near/far mesh budgets.


## Toyota AE86 Sprinter Trueno Zenki — current lightweight derivative
- Creator: [Martin Trafas](https://sketchfab.com/3d-models/toyota-ae86-sprinter-trueno-zenki-a5737bf3cc9b4179a6e5ebe173ff70d9).
- License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), public Sketchfab API metadata saved in tools/.reference-cache/toyota-ae86-search.json.
- Archived source: AllenAI Objaverse glbs/000-136/a5737bf3cc9b4179a6e5ebe173ff70d9.glb.
- Derivative: interior, wheel mechanics, number-plate lettering and source texture decoding omitted. Original LampCovers UV atlas sampled offline into separate opaque lamp/trim colour roles, with front amber/clear sections and rear smoked upper/reversing inner bands fitted to the viewed early hatchback photographs at https://collectingcars.com/for-sale/1985-toyota-ae86-trueno. Simplified exterior: 14,498 triangles; exporter input count207,744 includes original selected exterior, clipped colour-boundary faces and18 added grille/mount faces. Original raised headlamp reflectors (2228faces) are retained in this version. Distant body: 4,278. Four independently rolling original photo-inspired six-spoke rims: 1,952 triangles total; distant rims192 total; lightweight procedural tyres. Previous donor twelve-spoke rims are no longer used by current AE86. Wheelbase fitted to 2,400 mm and tracks to 1,355/1,345 mm; donor wide wheel diameter/width retained, not represented as stock tyres.
- Runtime: src/world/referenceMeshes/toyota-ae86.js. Optional candidate and previous stylised comparison mesh are excluded from the game bundle. Original heavy GLB and source colour atlas are used only by offline preparation.
- Rebuild: tools/prepare-ae86-zenki-source.mjs reads original GLB and the cached RGB atlas extracted with Pillow; tools/build-reference-car-meshes.mjs toyota-ae86 packs the current source. Colour partitioning and simplification are modifications to the source model.

AE86 rear-detail derivative (2026-10-03): separately preserved the donor rear wiper (5500 original triangles simplified to238), original tail/plate frame (300) and blank source plate form (120, source registration texture omitted). Original lamp faces crossing the colour boundaries are clipped/interpolated offline instead of assigning an entire triangle by its centre, retaining the existing sloped lens shell. Added original canvas lettering using the visible rear-photo wording APEX / TWIN CAM 16 / TOYOTA / SPRINTER / TRUENO, fitted to the painted hatch; generic system fonts approximate the typography. Wiper keeps the donor parked pose. Preparation: tools/prepare-ae86-zenki-source.mjs and tools/reference-ae86-identity.mjs; runtime uses packed geometry and the existing small canvas wordmark renderer.

AE86 exhaust derivative (2026-10-03): preserved all 504 original hollow outlet faces separately from the broad underbody reduction; outward shell/lip uses chrome (246), inward bore uses dull dark trim (258). Distant outlet is reduced to 160 faces. Original position, opening and surface geometry retained, with no added end cap, runtime GLB or texture. Material separation is an offline modification; photographed aftermarket outlet is not claimed to be copied exactly.

AE86 parked-wiper/panel-lighting derivative (2026-10-04): original connected arm and blade geometry scaled and posed separately against the observed rear photograph, then fitted close to the original rear glass with offline ray sampling. Near wiper240 faces; distant80. This is an approximate photographic parked pose, not an animated wiper. Original shared body attributes cloned before posing. Painted-panel normals smoothed offline within10cm neighborhoods while excluding folds over45 degrees; painted coordinates/faces, rims and all other near geometry stay unchanged.

AE86 front-detail derivative (2026-10-04): restored original raised-headlamp reflectors (599 near,80 distant) and original cover shells (250 near). Covers now use paint-independent transparent glass with a small original64x64 procedural ribbed normal texture and projected per-lamp UVs; distant proxy omits transparent covers. Photo-fit dark grille backing/three horizontal slats and blank front plate mount total18faces, reusing the existing offline front helper. Original TRUENO mesh shifted forward to remain exposed above the backing. Original lower corner-lens faces clipped through their full upper edge into amber/clear sections. Reference: https://images.collectingcars.com/007878/2IMG-8129.jpg?q=75&w=3840. No actual plate registration or downloaded source texture used at runtime.

AE86 six-spoke wheel derivative (2026-10-04): original offline geometry inspired by the six-spoke alloy wheels visible in the CollectingCars side photograph https://images.collectingcars.com/007878/4IMG-8107.jpg?q=75&w=3840. Bevelled six spokes, shallow barrel/lip, hub and four dark lug recess forms;488triangles per near rim (456silver/32dark),48per distant rim. Outer radius.205m approximates the photographed rim/tyre ratio; donor tyre dimensions retained, no claim of a specific factory wheel size. Geometry authored in tools/reference-ae86-photo-wheels.mjs using Three.js primitives, no downloaded wheel asset or raster texture. Satin alloy materials are independent of body paint.

BMW panel lighting (2026-10-04): existing offline panel-normal fitting gently averages similarly facing paint samples within160mm, retaining every near painted position and face count. Original offline tools/reference-panel-winding.mjs aligns surviving paint triangle winding with retained exterior normals, after both near/far simplification. This avoids isolated double-sided lighting reversals. No additional runtime calculation, texture, material or visible mesh. Source body, all glass/lamp/trim parts and animated wheel geometry retain prior attribution.

Defender 110 rolling rims (2026-10-04): the existing David_Holiday / 2021 Land Rover Defender 110 source attribution and CC BY4.0 apply to newly extracted five-spoke rims from its rims_bump material. Four source wheel regions are selected offline, excluding the rear spare/body, then duplicate opposite faces removed before simplification;449/450 near triangles per rim and80 far, with separate rolling and steering pivots. Source rubber/body/spare geometry remains unchanged. No donor textures or full GLB load during lightweight gameplay. Source wheel dimensions/profile and precise alloy variant remain approximations; JDPower comparison photo shows a different factory spoke style. Original generic bar rims/hubs are omitted when source rims exist. Front380/rear365mm brake discs follow the manufacturer technical sheet for larger alloy wheel options: https://jlrnewsroom.media/wp-content/uploads/2020/09/Land-Rover-Defender-110_TECH-DATA_21MY_090920.pdf . Far paint budget1350 accommodates hollow tyres and four real rims inside the unchanged3600-triangle detail gate; source upright body/glass/lamps/fixed spare retained. Rebuild with node tools/build-reference-car-meshes.mjs defender-110.

Skyline R34 headlamp revision (2026-10-04): original lightweight reflector bowls and dark housings fitted to the retained Mitya Petrov CC BY lamp outline using the Nissan Heritage photograph (https://www.nissan-global.com/EN/HERITAGE_COLLECTION/280_skyline_gt-r_v-spec_ii.html). Four reflector bowls, 64 triangles, plus six housing triangles and a separate clear cover. Original body, glass and rolling wheel coordinates remain unchanged. V-Spec II photograph is a front-lamp reference; its hood duct is not added to the current V-Spec. No photograph textures or heavy model are imported into the game.
## Skyline R34 V-Spec II exterior replacement — 2026-10-04

Current lightweight `skyline-r34` uses **Nissan Skyline GTR R34**, CREATIVE INTELLIGENCE (fast-07), https://sketchfab.com/3d-models/nissan-skyline-gtr-r34-f621f91e2e4847b697cf7df4e30a42e4 . License **CC BY 4.0**, https://creativecommons.org/licenses/by/4.0/ . Public source copy: Objaverse `glbs/000-031/f621f91e2e4847b697cf7df4e30a42e4.glb`, retained offline in `tools/.reference-cache/`; the game receives packed simplified arrays only. This replaces the earlier Mitya Petrov low-poly runtime body and its authored lamp revision above, preserved in test archives.

Skyline exhaust restoration (2026-10-05): retained donor Object_133 and Object_134, previously omitted because they share materials with excluded backing/interior parts. The original twin outlet assembly now has a neutral metal silencer/lip (120 triangles) and dark interior (60 triangles), present near and far. No existing painted body, lamp, glass or wheel coordinates changed; no original GLB loads during gameplay. This restores the attributed source shape; exact factory pipe dimensions are not asserted.

Skyline distant panel lighting (2026-10-05): 23 reduced painted faces had winding opposing their retained source lighting normals; aligned them offline. Split lighting at 122 remaining folds to follow the final face instead of its former dense-mesh surface. Every actual triangle coordinate/count stays unchanged; the detailed body, glass, lamps, exhaust and rolling wheels are untouched. This corrects lighting, not the remaining coarse distant panel or wheel shapes. Rebuild helper: tools/reference-skyline-panel-lighting.mjs through the existing exporter.

Skyline distant spokes (2026-10-05): replaced permissively simplified filled rim faces with 75 actual outward source faces per wheel, ranked by square-pixel and radial coverage offline. No invented face spans the original spoke openings. Near rims/body/glass/lamps/exhaust and steering positions are unchanged. Far whole-car geometry stays below 3600 triangles, with neutral metal rims independent of body paint. These remain the source's aftermarket rims, not exact factory wheels. Rebuild helper: tools/reference-source-distant-spokes.mjs through the existing exporter; no original GLB is loaded during gameplay.

Skyline protected distant panels (2026-10-05): exact source-position welding reduces duplicate lighting-seam vertices from 9760 to 3889 before topology-preserving body simplification. Twenty-nine original flat wing-blade and narrow painted tail-lamp surround faces are copied separately without reduction. The final painted far body has 1399 triangles; near body, lights, glass, exhaust and wheel assemblies remain unchanged. Independent side/front/rear/roof surface comparisons retain all formerly covered test points and reduce missed source-paint hits from 25 to 6. This is a relative source-shape check, not proof of exact factory panel curves. Rebuild: tools/reference-skyline-far-topology.mjs through the existing exporter. Earlier unrestricted welding and broad vertex-lock candidates were rejected and are recorded separately.

Changes: removed interior/mechanical parts and tyres; retained curved exterior sheet metal, door handles, mirrors, factory-style bumpers, hood duct, wing and separate lamps/windows; simplified the prepared exterior from 77,328 to 12,698 triangles; fitted 4600×1780×1360 mm proportions, 2665 mm wheelbase, 1480/1490 mm tracks and 245/40R18 tyres from the Nissan Heritage V-Spec II page https://www.nissan-global.com/EN/HERITAGE_COLLECTION/280_skyline_gt-r_v-spec_ii.html . Front overhang fitting of 940 mm is an approximation, not a manufacturer dimension. The catalogue name now says V-Spec II to match the hood duct. Source six-spoke aftermarket rims are retained as four independent rolling assemblies, at most 450 triangles each, recoloured silver. They are not claimed to be exact factory V-Spec II wheels. Surface normals smoothed offline without moving paint coordinates; recessed headlamp reflectors separated from dark housings; hidden far bumper backing inset to avoid covering the left lamp. The far body has 2,725 triangles plus separate far rims. Existing runtime tyre/steering/paint systems remain in use. No source images are used as runtime textures.
Supra JZA80 front-indicator correction (2026-10-04): original 152-triangle source bumper lenses were separated from the white lamp material into protected amber-front material, using the actual Supra RZ front photograph by Falcon® Photography, https://commons.wikimedia.org/wiki/File:Toyota_E-JZA80_Supra_RZ_(20122616144).jpg (CC BY-SA 2.0, photograph displayed only in the review page). No new photo texture or geometry added. Body, glass, headlights, tail lamps, axles and rolling rims unchanged. Distant white-lamp and amber budgets share the previous 120-triangle allowance (80/40), preserving the 3,557-triangle distant assembly. Source model attribution remains IVA CC BY 4.0 above.

### Mazda BK five-spoke wheel photo comparison — 2026-10-05

Original lightweight wheel geometry made using the existing Three.js offline Shape/Lathe pipeline, replacing donor fan-shaped rims; no downloaded wheel mesh or runtime photographic texture. Five broad spokes, open spaces, shallow barrel, five fastening marks; approximate photographed stock appearance, not a measured OEM replica. Existing body, glass, lamps and axle metadata retained unchanged.

Reference photographs: EurovisionNim, own photographs of a 2006 Mazda 3 (BK) 1.6 Luxury sedan, Singapore, 3 January 2016; CC BY-SA 4.0. Remote unchanged images used only by the development comparison page, with author and license links.
- Front: https://commons.wikimedia.org/wiki/File:2006_Mazda_3_(BK)_1.6_Luxury_sedan_(2016-01-03)_01.jpg
- Rear: https://commons.wikimedia.org/wiki/File:2006_Mazda_3_(BK)_1.6_Luxury_sedan_(2016-01-03)_02.jpg
- License: https://creativecommons.org/licenses/by-sa/4.0/


Mazda BK rear details (2026-10-05): original 148-face additions based on the same EurovisionNim rear photograph credited above: U-shaped boot seam, paired rounded bumper reflectors/chrome borders. Corrected blank rear plate mount to bumper at y.535, width.52/height.11; no registration text. Reuses installed Three ray-fitting on each detail level. Flat mounting bias avoids original curved bumper covering the blank plate/reflectors. These are approximate fitted surface details, not physical opening doors or carved recesses. Original donor body, glazing, wheels and lamps retained.

Mazda BK stock-looking upper grille and distant tail backing (2026-10-05): original donor surfaces reclassified into a shared small honeycomb finish inside the retained grille outline; 46 painted and40 trim faces, no added near triangles. Existing raised donor contours remain approximate rather than a measured factory grille. Far model reuses86 retained grille faces, +40 far faces total. Two simplified tail-backing faces inset2cm on duplicated vertices so circular source red reflectors remain exposed; no new lamp geometry or repainted covers.

Additional primary reference: IFCAR, own photograph of a2007–2009 Mazda3 sedan in College Park, Maryland, October2008, released into public domain. Unchanged remote image shown only in development comparison page, credited to photographer.
https://commons.wikimedia.org/wiki/File:07-09_Mazda_3_sedan.jpg
Manufacturer archive confirms2007 belongs to same revised BK era: https://news.mazdausa.com/vehicles?item=137 (no manufacturer media downloaded into game).

Ferrari 488 Pista pipe interior reference: Alexander Migl, own photograph at Geneva 6 March 2018, https://commons.wikimedia.org/wiki/File:Ferrari_488_Pista_Back_Genf_2018.jpg (CC BY-SA 4.0). Viewed for comparison only; photograph not included in runtime assets. Original lightweight recessed backing is24faces; donor lips/body retained.

Ferrari distant diffuser:26 retained original near trim faces copied into far mesh to recover missing rear surfaces; all original licensed source attribution unchanged. No new texture/material or runtime model.

Generic DAF box-trailer rear hardware (2026-10-05): original lightweight boxes/face proxies for rear lamp sections, underrun guard/supports, blank plate mount, door handles and reflective outline. Reference photograph viewed on the manufacturer website, not copied into runtime: https://www.cargobull.com/en/products/curtainsider/curtainsider-semi-trailer/s-cs-coil (Rear / Double wing door). This does not identify the compact game trailer as an exact Cargobull model. Distant hardware projects only outward faces; grouped vertex colours preserve white/dark/metal/clear finishes, red/amber retain emission. Complete far geometry4494triangles/15draws stays within the existing4500/16 cap; cab donor attribution and geometry unchanged.

BMW M4 rear correction (2026-10-06): removed only isolated donor aftermarket-wing components and their end supports to move the lightweight exterior closer to the stock Competition reference photograph. Existing donor licence/attribution unchanged; all retained vertex coordinates, normals, lights, glazing and wheel arrays remain exact. Original boot and small painted rear lip retained. Original source carbon kit details remain approximate rather than an exact factory exterior. Near reduced302 triangles; distant reduced59. The exporter reproduces the correction; no runtime model loading or textures added.

Land Cruiser200 lower-front profile (2026-10-06): original bounded height-only fitting based on Toyota's 2016–2017 factory photo004, viewed in https://pressroom.toyota.com/album/2016-2017-toyota-land-cruiser/. Lower-front vertices rise by at most0.20m; x/z positions, all original face indices, upper fascia, glazing, rear and wheels retained. Normals fitted analytically to the continuous deformation. Same near/far triangle counts; no new material or runtime processing. Approximate visual fit, not an exact measured factory bumper. Existing donor attribution/licence unchanged; manufacturer photographs viewed only for comparison, not copied into runtime textures/assets. Local review retains its separately credited Drom rear image because the factory image was not available there.
