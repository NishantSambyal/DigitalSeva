const EMOJI_PLACEHOLDER =
  'data:image/jpeg;base64,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';

export default { EMOJI_PLACEHOLDER };