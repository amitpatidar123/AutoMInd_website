import { useState, useEffect } from 'react';

// Caches the response to avoid rate limiting during dev
let cachedRelease = null;

export const useGitHubRelease = (repo = 'automind/automind') => {
  const [release, setRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        if (cachedRelease) {
          setRelease(cachedRelease);
          setLoading(false);
          return;
        }

        // We use a real API endpoint, but if it fails (e.g., repo doesn't exist yet),
        // we fallback to mock data to ensure the landing page works.
        const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch release');
        }

        const data = await response.json();
        
        // Extract relevant info
        const releaseInfo = {
          version: data.tag_name || 'v1.0.0',
          publishedAt: new Date(data.published_at).toLocaleDateString(),
          body: data.body || 'No release notes available.',
          url: data.html_url,
          assets: data.assets.map(asset => ({
            name: asset.name,
            size: (asset.size / (1024 * 1024)).toFixed(2) + ' MB',
            downloadUrl: asset.browser_download_url
          }))
        };

        cachedRelease = releaseInfo;
        setRelease(releaseInfo);
      } catch (err) {
        console.warn('Using fallback release data:', err.message);
        const fallback = {
          version: 'v1.0.0',
          publishedAt: new Date().toLocaleDateString(),
          body: '## Initial Release\\n\\n- Introduced multi-agent orchestration.\\n- Added local Ollama integration.\\n- Enhanced security and privacy isolation.',
          url: 'https://github.com/automind/automind/releases/latest',
          assets: [
            { name: 'AutoMind-Windows-Installer.exe', size: '145.20 MB', downloadUrl: '/downloads/AutoMind-Windows-Installer.exe' },
            { name: 'AutoMind-macOS.dmg', size: '120.50 MB', downloadUrl: '#' },
            { name: 'AutoMind-Linux.AppImage', size: '135.80 MB', downloadUrl: '#' },
          ]
        };
        cachedRelease = fallback;
        setRelease(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, [repo]);

  return { release, loading, error };
};
