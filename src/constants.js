import NeoConvertor from 'neo-convertor'

export const ASSETS = [
  {
    decimals: '0',
    name: 'NEO',
    scripthash: '0x43cf98eddbe047e198a3e5d57006311442a0ca15',
    symbol: 'neo',
    firstseen: 0,
  },
  {
    decimals: '8',
    name: 'GAS',
    scripthash: '0xa1760976db5fcdfab2a9930e8f6ce875b2d18225',
    symbol: 'gas',
    firstseen: 0,
  },
]

export const SEARCH_TYPES = {
  ADDRESS: 'ADDRESS',
  CONTRACT: 'CONTRACT',
  BLOCK: 'BLOCK',
  TRANSACTION: 'TRANSACTION',
}

export const GENERATE_BASE_URL = (net = 'test_net') =>
  `https://5jcgfs9ixb.execute-api.us-east-1.amazonaws.com/api/${net}/v1`

// TODO: implement a much better solution
export const CONVERT_TO_DECIMAL = value => value / 100000000

export const TRANSFER = '5472616e73666572'

export const hexToAscii = str1 => {
  const hex = str1.toString()
  let str = ''
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}

export const asciiToByteArray = str => {
  var utf8 = unescape(encodeURIComponent(str))

  var arr = []
  for (var i = 0; i < utf8.length; i++) {
    arr.push(utf8.charCodeAt(i))
  }
}

export const HEX_STRING_OPTION = {
  value: 'Hexstring',
  label: 'Hexstring',
  // BUG: assumes the input will always be plain string
  // we need to create a better API here for
  convert: async value => asciiToByteArray(value),
}

export const STRING_OPTION = {
  value: 'String',
  label: 'String',
  convert: async value => hexToAscii(value),
}

export const INTEGER_OPTION = {
  value: 'Integer',
  label: 'Integer',
}

export const ADDRESS_OPTION = {
  value: 'Address',
  label: 'Address',
  convert: value =>
    value.length === 40 &&
    NeoConvertor.Address.scriptHashToAddress(value, true),
}

export const TX_STATE_TYPE_MAPPINGS = {
  Signature: {
    color: '#E9005B',
    options: [HEX_STRING_OPTION, STRING_OPTION],
  },
  Boolean: {
    color: '#E800BA',
    options: [STRING_OPTION],
  },
  Integer: {
    color: '#A001FF',
    options: [INTEGER_OPTION],
  },
  Hash160: {
    color: '#008529',
    options: [HEX_STRING_OPTION, STRING_OPTION],
  },
  Null: {
    color: 'rgba(255, 255, 255, 0.08)',
    options: [STRING_OPTION],
  },
  Hash256: {
    color: '#1DB5FF',
    options: [HEX_STRING_OPTION, STRING_OPTION],
  },
  ByteArray: {
    color: '#3B01FF',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  PublicKey: {
    color: '#00D69D',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  String: {
    color: '#A4B500',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  Array: {
    color: '#F28F00',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  InteropInterface: {
    color: '#A50000',
    options: [HEX_STRING_OPTION, STRING_OPTION, ADDRESS_OPTION],
  },
  Void: {
    color: '#528D93',
    options: [STRING_OPTION],
  },
}
