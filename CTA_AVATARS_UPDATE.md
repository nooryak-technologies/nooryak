# CTA Section Avatar Images Update

## Summary
Successfully added dummy profile images to the 4 avatar circles in the CTA section.

## Changes Made

### 1. Updated page.tsx
- Replaced gradient `<span>` elements with Next.js `<Image>` components
- Added 4 dummy profile images from pravatar.cc
- Each image is 36x36px
- Kept the "+1K" badge as the 5th avatar

### 2. Created next.config.js
- Added configuration to allow external images from `i.pravatar.cc`
- Required for Next.js Image optimization

### 3. Avatar Images Used
```tsx
1. https://i.pravatar.cc/150?img=1  - First avatar
2. https://i.pravatar.cc/150?img=5  - Second avatar
3. https://i.pravatar.cc/150?img=8  - Third avatar
4. https://i.pravatar.cc/150?img=12 - Fourth avatar
5. "+1K" badge - Fifth element (text badge)
```

## Existing SCSS Styles (Already Perfect)
- ✅ `border-radius: 50%` - Makes images circular
- ✅ `object-fit: cover` - Ensures images fill the circle
- ✅ `border: 2px solid rgba(255,255,255,.8)` - White border
- ✅ `margin-right: -10px` - Overlapping effect
- ✅ `box-shadow: 0 4px 12px rgba(0,0,0,.3)` - Depth shadow
- ✅ `width: 36px; height: 36px` - Fixed size

## How to Replace with Your Own Images

### Option 1: Use Local Images
1. Place images in `public/assets/images/avatars/`
2. Update the src paths:
```tsx
<Image 
  src="/assets/images/avatars/client1.jpg" 
  alt="Client avatar" 
  width={36} 
  height={36} 
  className="smm-cta__avatar"
/>
```

### Option 2: Use Different Placeholder Service
Update `next.config.js` to allow the new domain:
```js
{
  protocol: 'https',
  hostname: 'your-image-service.com',
  port: '',
  pathname: '/**',
}
```

### Option 3: Use UI Avatars (Text-based)
```tsx
<Image 
  src="https://ui-avatars.com/api/?name=John+Doe&background=random" 
  alt="Client avatar" 
  width={36} 
  height={36} 
  className="smm-cta__avatar"
/>
```
(Don't forget to add `ui-avatars.com` to next.config.js)

## Pravatar.cc Image Parameters

The service provides random avatar images:
- `?img=1` to `?img=70` - Different avatar images
- Size: 150x150px (will be scaled to 36x36px by Next.js)
- Format: JPEG
- Free to use

## Files Modified

1. ✅ `src/app/services/submenu/social-media-marketing/page.tsx`
2. ✅ `next.config.js` (created)

## Testing Checklist

- [ ] Avatars display as circles
- [ ] Images load correctly
- [ ] Overlapping effect works
- [ ] White borders visible
- [ ] "+1K" badge displays correctly
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Images are optimized by Next.js

## Notes

- Using pravatar.cc for dummy images (free placeholder service)
- Images are cached by Next.js for performance
- The 5th circle is a text badge showing "+1K"
- All avatars have consistent styling
- Images are accessible with alt text

## Alternative Image Sources

1. **Pravatar.cc** (current) - Random avatars
2. **UI Avatars** - Text-based avatars
3. **Unsplash** - Real photos (requires API key)
4. **Local images** - Your own client photos
5. **Gravatar** - Email-based avatars
6. **DiceBear** - Generated avatars

## Security Note

When using external image sources in production:
- Always use HTTPS
- Whitelist specific domains in next.config.js
- Consider hosting images locally for better control
- Ensure images comply with privacy policies
