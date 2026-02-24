# LWC Skeleton Loader (SLDS Compliant)

A reusable Skeleton / Stencil Loader component for Salesforce Lightning
Web Components (LWC), built following Salesforce Lightning Design System
(SLDS) loading guidelines.

This component provides structured loading placeholders instead of
spinners, improving perceived performance and delivering a modern
Salesforce UX experience.

Visit - https://lwc-skeleton-landing.vercel.app/

------------------------------------------------------------------------

## Why Use Skeleton Loaders?

Instead of showing a spinner (`lightning-spinner`), skeleton loaders:

-   Preserve layout while data loads
-   Reduce layout shifts
-   Improve perceived performance
-   Match modern Salesforce Lightning UX patterns

------------------------------------------------------------------------

## Features

-   Fully reusable `<c-lwc-skeleton>` component
-   SLDS-aligned neutral loading styles
-   Animated shimmer effect
-   Supports multiple use cases:
    -   Text lines
    -   Small text lines
    -   Avatar
    -   Card layout
    -   Table layout
    -   Custom rectangle
-   Configurable via public `@api` properties
-   Works across Record Pages, App Pages, and Home Pages

------------------------------------------------------------------------

## Installation

### Option 1 -- Manual Installation

1.  Clone the repository:

        git clone https://github.com/your-org/lwc-skeleton-loader.git

2.  Copy the `lwc-skeleton` folder into:

        force-app/main/default/lwc/

3.  Deploy to your org:

        sfdx force:source:deploy -p force-app

------------------------------------------------------------------------

## Usage

Use the component with conditional rendering in your parent component:

``` html
<template if:true={isLoading}>
    <c-lwc-skeleton type="text" lines="4" ></c-lwc-skeleton>
    <c-lwc-skeleton type="small-text" lines="2" ></c-lwc-skeleton>
    <c-lwc-skeleton type="avatar" ></c-lwc-skeleton>
    <c-lwc-skeleton type="card" ></c-lwc-skeleton>
    <c-lwc-skeleton type="table" rows="6" columns="4" ></c-lwc-skeleton>
    <c-lwc-skeleton type="rectangle" width="100%" height="200px" ></c-lwc-skeleton>
</template>

```

------------------------------------------------------------------------

## Component API

  ------------------------------------------------------------------------
  Property            Type       Default           Description
  ------------------- ---------- ----------------- -----------------------
  `type`              String     `text`            `text`, `small-text`,
                                                   `avatar`, `card`,
                                                   `table`, `rectangle`

  `lines`             Number     3                 Number of text lines

  `rows`              Number     5                 Number of table rows

  `columns`           Number     3                 Number of table columns

  `width`             String     100%              Width (for rectangle
                                                   type)

  `height`            String     150px             Height (for rectangle
                                                   type)
  ------------------------------------------------------------------------

------------------------------------------------------------------------

## Examples

### Text Loader

``` html
<c-lwc-skeleton type="text" lines="4" ></c-lwc-skeleton>
```

### Small Text Loader

``` html
<c-lwc-skeleton type="small-text" lines="2" ></c-lwc-skeleton>
```

### Avatar Loader

``` html
<c-lwc-skeleton type="avatar" ></c-lwc-skeleton>
```

### Card Loader

``` html
<c-lwc-skeleton type="card" ></c-lwc-skeleton>
```

### Table Loader

``` html
<c-lwc-skeleton type="table" rows="6" columns="4" ></c-lwc-skeleton>
```

### Rectangle Loader

``` html
<c-lwc-skeleton type="rectangle" width="100%" height="200px" ></c-lwc-skeleton>
```

------------------------------------------------------------------------

## Best Practices

-   Use skeleton loaders when the final layout structure is known.
-   Keep skeleton structure aligned with actual UI to avoid layout
    shifts.
-   Use `lightning-spinner` only for short or blocking operations.

------------------------------------------------------------------------

## Project Structure

    lwc/
     └── lwcSkeleton/
          ├── lwcSkeleton.html
          ├── lwcSkeleton.js
          ├── lwcSkeleton.css
          └── lwcSkeleton.js-meta.xml

------------------------------------------------------------------------

## License

MIT License

------------------------------------------------------------------------

Built for reusable, scalable Salesforce UX improvements.
