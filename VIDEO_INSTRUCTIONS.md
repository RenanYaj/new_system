# Video File Instructions

## ⚠️ Important: Videos are NOT stored in GitHub

Due to GitHub's 100MB file size limit, video files are excluded from this repository.

## 📁 Where to Place Your Video

1. **Local Development:**
   - Place your video file in: `public/video1.mp4`
   - The video is already configured to load from this location

2. **Production/Deployment:**
   - Upload `video1.mp4` directly to your server's `public` folder
   - Or use a video hosting service like:
     - YouTube (embed)
     - Vimeo (embed)
     - Google Drive (public link)
     - Cloudinary
     - AWS S3

## 🎥 Supported Video Formats

- MP4 (recommended - best compatibility)
- WebM
- OGG

## 💡 Recommendation for Large Videos

For videos larger than 50MB, consider:
1. **Compress the video** using HandBrake or similar tools
2. **Host externally** and embed (YouTube, Vimeo)
3. **Use a CDN** for better performance

## 📝 Current Configuration

The website is configured to load: `public/video1.mp4`

To change this, edit: `resources/views/monthsary.blade.php`
Look for: `<source src="{{ asset('video1.mp4') }}"...`
