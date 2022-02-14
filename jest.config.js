module.exports = async () => {
  return {
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['lcov', 'text', 'text-summary'],
  };
};
