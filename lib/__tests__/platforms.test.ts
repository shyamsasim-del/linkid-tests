import { detectPlatform, validatePlatformUrl, normalizeUrl, slugifyPlatform } from '@/lib/platforms';

describe('Platform Utilities', () => {
  describe('normalizeUrl', () => {
    it('should add https protocol if missing', () => {
      expect(normalizeUrl('github.com/user')).toBe('https://github.com/user');
    });

    it('should remove trailing slashes', () => {
      expect(normalizeUrl('https://github.com/user/')).toBe('https://github.com/user');
    });

    it('should preserve query parameters', () => {
      expect(normalizeUrl('https://github.com/user?tab=repos')).toBe('https://github.com/user?tab=repos');
    });

    it('should handle URLs with www prefix', () => {
      expect(normalizeUrl('https://www.github.com/user')).toBe('https://www.github.com/user');
    });

    it('should trim whitespace', () => {
      expect(normalizeUrl('  https://github.com/user  ')).toBe('https://github.com/user');
    });
  });

  describe('detectPlatform', () => {
    it('should detect GitHub URLs', () => {
      expect(detectPlatform('https://github.com/vishnukothakapu')).toBe('github');
    });

    it('should detect GitHub URLs without www', () => {
      expect(detectPlatform('github.com/user123')).toBe('github');
    });

    it('should detect LinkedIn URLs', () => {
      expect(detectPlatform('https://linkedin.com/in/username')).toBe('linkedin');
    });

    it('should detect X/Twitter URLs', () => {
      expect(detectPlatform('https://x.com/username')).toBe('x');
    });

    it('should detect Twitter URLs (legacy)', () => {
      expect(detectPlatform('https://twitter.com/username')).toBe('x');
    });

    it('should detect YouTube URLs', () => {
      expect(detectPlatform('https://youtube.com/@username')).toBe('youtube');
    });

    it('should detect Instagram URLs', () => {
      expect(detectPlatform('https://instagram.com/username')).toBe('instagram');
    });

    it('should detect LeetCode URLs', () => {
      expect(detectPlatform('https://leetcode.com/u/username')).toBe('leetcode');
    });

    it('should detect Discord URLs', () => {
      expect(detectPlatform('https://discord.com/users/123456')).toBe('discord');
    });

    it('should detect Twitch URLs', () => {
      expect(detectPlatform('https://twitch.tv/username')).toBe('twitch');
    });

    it('should fallback to website for unknown URLs', () => {
      expect(detectPlatform('https://example.com')).toBe('website');
    });

    it('should fallback to website for custom domains', () => {
      expect(detectPlatform('https://myblog.com/profile')).toBe('website');
    });
  });

  describe('validatePlatformUrl', () => {
    it('should validate correct GitHub URL', () => {
      expect(validatePlatformUrl('github', 'https://github.com/user123')).toBe(true);
    });

    it('should validate GitHub URL with trailing slash', () => {
      expect(validatePlatformUrl('github', 'https://github.com/user123/')).toBe(true);
    });

    it('should reject invalid GitHub URL (no username)', () => {
      expect(validatePlatformUrl('github', 'https://github.com/')).toBe(false);
    });

    it('should block LinkedIn messaging endpoints', () => {
      expect(validatePlatformUrl('linkedin', 'https://linkedin.com/messaging')).toBe(false);
    });

    it('should block LinkedIn feed endpoints', () => {
      expect(validatePlatformUrl('linkedin', 'https://linkedin.com/feed')).toBe(false);
    });

    it('should block Facebook messaging endpoints', () => {
      expect(validatePlatformUrl('facebook', 'https://facebook.com/messaging')).toBe(false);
    });

    it('should validate correct LinkedIn profile URL', () => {
      expect(validatePlatformUrl('linkedin', 'https://linkedin.com/in/username')).toBe(true);
    });

    it('should validate correct X/Twitter URL', () => {
      expect(validatePlatformUrl('x', 'https://x.com/username')).toBe(true);
    });

    it('should validate Instagram profile URL', () => {
      expect(validatePlatformUrl('instagram', 'https://instagram.com/username')).toBe(true);
    });

    it('should validate Discord invite URL', () => {
      expect(validatePlatformUrl('discord', 'https://discord.com/invite/abc123')).toBe(true);
    });

    it('should validate YouTube channel URL', () => {
      expect(validatePlatformUrl('youtube', 'https://youtube.com/@username')).toBe(true);
    });
  });

  describe('slugifyPlatform', () => {
    it('should convert to lowercase and hyphenate', () => {
      expect(slugifyPlatform('My Platform')).toBe('my-platform');
    });

    it('should remove special characters', () => {
      expect(slugifyPlatform('Platform@2024!')).toBe('platform2024');
    });

    it('should handle multiple spaces', () => {
      expect(slugifyPlatform('My   Custom   Platform')).toBe('my-custom-platform');
    });

    it('should return empty string for null/undefined', () => {
      expect(slugifyPlatform(null)).toBe('');
      expect(slugifyPlatform(undefined)).toBe('');
    });

    it('should handle already-slugified strings', () => {
      expect(slugifyPlatform('my-platform')).toBe('my-platform');
    });
  });
});