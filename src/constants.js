import { wallet, u } from '@cityofzion/neon-js'
import { enc } from 'crypto-js'
import NeoConvertor from 'neo-convertor'
import bs58check from 'bs58check'

export function base642hex(input) {
  return enc.Base64.parse(input).toString(enc.Hex)
}

export function base64Encode(input) {
  return enc.Base64.stringify(enc.Utf8.parse(input))
}

export function base64Decode(input) {
  return enc.Base64.parse(input).toString(enc.Utf8)
}

export const ASSETS = [
  {
    decimals: '8',
    name: 'TokenTest',
    scripthash: '0x37240b1a6fe30b91d29304011dc30810f9ff56ce',
    symbol: 'TTS',
    firstseen: 74565,
  },
  {
    decimals: '8',
    name: 'My Token v1.0',
    scripthash: '0xa69d9fd5b49926607e0d4da6fd47ab0fd79fbd70',
    symbol: 'MT',
    firstseen: 71847,
  },
  {
    decimals: '8',
    name: 'MyTokenTest',
    scripthash: '0xa89719dd87d5336032160fb60733317dc0e45ef2',
    symbol: 'MTT',
    firstseen: 70983,
  },
  {
    decimals: '8',
    name: 'GAS',
    scripthash: '0x8c23f196d8a1bfd103a9dcb1f9ccf0c611377d3b',
    symbol: 'gas',
    firstseen: 0,
  },
  {
    decimals: '0',
    name: 'NEO',
    scripthash: '0x9bde8f209c88dd0e7ca3bf0af0f476cdd8207789',
    symbol: 'neo',
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
  `https://orpbxyzosb.execute-api.us-east-1.amazonaws.com/preview2/${net}/v1`

// TODO: implement a much better solution
export const CONVERT_TO_DECIMAL = value => value / 100000000

export const TRANSFER = 'VHJhbnNmZXI='

export const getAddressFromSriptHash = hash => {
  var d = Buffer.from(hash, 'base64')
  let inputData = Buffer.alloc(21)
  inputData.writeInt8(0x35, 0)
  inputData.fill(d, 1)
  return bs58check.encode(inputData)
}

export const hexToAscii = async str1 => {
  const size = parseInt(str1.replace(/=/g, '').length * 0.75)

  if (size === 20) {
    return getAddressFromSriptHash(str1)
  } else {
    const unencoded = atob(unescape(str1))
    return unencoded
  }
}

export const asciiToByteArray = str => {
  const utf8 = unescape(encodeURIComponent(str))

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
