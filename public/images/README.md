# Images

Organised by purpose. Nothing loose in the top level.

- `brand/` — logo mark and the signature olive-tree illustration.
- `campaigns/` — campaign artwork.
- `impact/` — imagery for updates and impact sections.
- `stories/` — imagery for stories.
- `icons/` — small line icons.

Every file currently prefixed `placeholder_` (plus `olive_tree.svg`) is a
first-party illustration standing in until approved photography exists. They are
SVG, so `illustration_frame.tsx` renders them with `unoptimized`. Once real
photography lands, drop that prop so `next/image` optimises the raster files.

Do not replace these with generic stock photography.
