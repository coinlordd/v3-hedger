module.exports = {
  istanbulReporter: ["html", "lcov"],
  providerOptions: {
    mnemonic: process.env.MNEMONIC,
  },
  configureYulOptimizer: true,
  skipFiles: ["test"],
};
