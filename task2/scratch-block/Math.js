const { sqrt } = Math;

const sqrtBlock = {
  opcode: 'math_sqrt',
  blockType: BlockType.REPORTER,
  text: formatMessage({
    id: 'operators.sqrt',
    default: 'square root of [NUMBER]'
  }),
  arguments: {
    NUMBER: {
      type: ArgumentType.NUMBER,
      defaultValue: 10
    }
  },
  func: args => sqrt(args.NUMBER),
  tooltip: formatMessage({
    id: 'operators.sqrtTooltip',
    default: 'Returns the square root of the given number.'
  }),
  category: BlockCategory.OPERATORS
};

module.exports = { sqrtBlock };
