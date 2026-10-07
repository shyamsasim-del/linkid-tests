# LinkID Unit Tests

Comprehensive unit tests for [LinkID](https://github.com/vishnukothakapu/linkid) core library utilities.

## Overview

This repository contains unit tests for the following LinkID modules:

- **`lib/platforms.ts`** - Platform detection, URL validation, and normalization
- **`lib/platformIcons.ts`** - Platform icon and name mappings

## Test Coverage

### Platform Utilities Tests (`lib/__tests__/platforms.test.ts`)
- ✅ URL normalization (protocol addition, trailing slashes, query parameters)
- ✅ Platform detection (GitHub, LinkedIn, X/Twitter, YouTube, Instagram, Discord, Twitch, LeetCode, etc.)
- ✅ Platform URL validation (correct URLs, blocked endpoints, edge cases)
- ✅ Platform slug generation

### Platform Icons Tests (`lib/__tests__/platformIcons.test.ts`)
- ✅ Icon and name properties for all platforms
- ✅ Consistency between PLATFORMS, PLATFORM_ICONS, and PLATFORM_NAMES
- ✅ Valid icon component types
- ✅ No duplicate platform names

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Requirements

- Node.js >= 20.9.0
- npm or yarn

## Test Statistics

- **Total Test Cases**: 40+
- **Coverage Target**: 70%+ (branches, functions, lines, statements)
- **Platform Detection Tests**: 12
- **URL Validation Tests**: 10
- **URL Normalization Tests**: 5
- **Icon Consistency Tests**: 8

## Integration with LinkID

These tests can be integrated into the main [LinkID repository](https://github.com/vishnukothakapu/linkid) by:

1. Copying `lib/__tests__/` directory to the LinkID project
2. Adding test dependencies to LinkID's `package.json`
3. Running tests as part of CI/CD pipeline

## Contributing

Contributions are welcome! If you find issues or want to add more test cases:

1. Fork this repository
2. Create a feature branch
3. Add your tests
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Author

[shyamsasim-del](https://github.com/shyamsasim-del)

## Related

- [LinkID Repository](https://github.com/vishnukothakapu/linkid)
- [LinkID Issues](https://github.com/vishnukothakapu/linkid/issues)
