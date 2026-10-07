import { PLATFORMS, PLATFORM_ICONS, PLATFORM_NAMES } from '@/lib/platformIcons';

describe('Platform Icons', () => {
  describe('PLATFORMS object', () => {
    it('should have icon and name properties for each platform', () => {
      Object.entries(PLATFORMS).forEach(([platform, data]) => {
        expect(data).toHaveProperty('icon');
        expect(data).toHaveProperty('name');
        expect(typeof data.name).toBe('string');
      });
    });

    it('should have icon for GitHub', () => {
      expect(PLATFORMS.github).toBeDefined();
      expect(PLATFORMS.github.name).toBe('GitHub');
    });

    it('should have icon for LinkedIn', () => {
      expect(PLATFORMS.linkedin).toBeDefined();
      expect(PLATFORMS.linkedin.name).toBe('LinkedIn');
    });

    it('should have icon for X/Twitter', () => {
      expect(PLATFORMS.x).toBeDefined();
      expect(PLATFORMS.x.name).toBe('X');
    });

    it('should have icon for YouTube', () => {
      expect(PLATFORMS.youtube).toBeDefined();
      expect(PLATFORMS.youtube.name).toBe('YouTube');
    });

    it('should have icon for Instagram', () => {
      expect(PLATFORMS.instagram).toBeDefined();
      expect(PLATFORMS.instagram.name).toBe('Instagram');
    });
  });

  describe('PLATFORM_ICONS mapping', () => {
    it('should have icons for all platforms', () => {
      Object.keys(PLATFORMS).forEach(platform => {
        expect(PLATFORM_ICONS[platform]).toBeDefined();
      });
    });

    it('should return valid icon component for GitHub', () => {
      expect(PLATFORM_ICONS.github).toBeDefined();
      expect(typeof PLATFORM_ICONS.github).toBe('function');
    });

    it('should return valid icon component for all platforms', () => {
      Object.values(PLATFORM_ICONS).forEach(icon => {
        expect(typeof icon).toBe('function');
      });
    });
  });

  describe('PLATFORM_NAMES mapping', () => {
    it('should have names for all platforms', () => {
      Object.keys(PLATFORMS).forEach(platform => {
        expect(PLATFORM_NAMES[platform]).toBeDefined();
        expect(typeof PLATFORM_NAMES[platform]).toBe('string');
      });
    });

    it('should have human-readable names', () => {
      expect(PLATFORM_NAMES.github).toBe('GitHub');
      expect(PLATFORM_NAMES.linkedin).toBe('LinkedIn');
      expect(PLATFORM_NAMES.x).toBe('X');
      expect(PLATFORM_NAMES.youtube).toBe('YouTube');
    });
  });

  describe('Consistency checks', () => {
    it('should have consistent mapping between PLATFORMS, PLATFORM_ICONS, and PLATFORM_NAMES', () => {
      const platformKeys = Object.keys(PLATFORMS).sort();
      const iconKeys = Object.keys(PLATFORM_ICONS).sort();
      const nameKeys = Object.keys(PLATFORM_NAMES).sort();

      expect(iconKeys).toEqual(platformKeys);
      expect(nameKeys).toEqual(platformKeys);
    });

    it('should not have duplicate platform names', () => {
      const names = Object.values(PLATFORM_NAMES);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    it('should have at least 10 platforms', () => {
      expect(Object.keys(PLATFORMS).length).toBeGreaterThanOrEqual(10);
    });
  });
});