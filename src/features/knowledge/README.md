# Knowledge Feature

This folder holds UI-facing knowledge graph helpers.

- `knowledge-ui.tsx`: labels, search, source resolution, category icons, and graph visibility rules.
- Page components can stay thin by calling these helpers instead of re-implementing data lookups.
- Data remains in `src/data/knowledge-points/`; this layer prepares data for interface rendering.
