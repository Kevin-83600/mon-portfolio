module.exports = {
  extends: "stylelint-config-standard",

  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "no-empty-source": true,

    // 🔽 Ajout de cette ligne pour désactiver le warning des lignes vides
    "rule-empty-line-before": null,
  },
};
