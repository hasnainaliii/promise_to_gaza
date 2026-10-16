# Images

Organised by purpose. Nothing loose in the top level.

- `brand/` — logo, the footer landscape and the signature olive-tree illustration.
- `hero/` — background photography for the home page hero slideshow.
- `campaigns/` — campaign artwork.
- `impact/` — imagery for updates and impact sections.
- `stories/` — imagery for stories.
- `icons/` — small line icons.
- `about/` — photography used on the About page.
- `ourwork/` — field photography from the relief drives.

Photographs are stored at most 2560px wide as JPEG. `next/image` resizes them
per device, so larger originals only slow down the first optimisation.

Every file currently prefixed `placeholder_` (plus `olive_tree.svg`) is a
first-party illustration standing in until approved photography exists. They are
SVG, so `illustration_frame.tsx` renders them with `unoptimized`. Once real
photography lands, drop that prop so `next/image` optimises the raster files.

Do not replace these with generic stock photography.
