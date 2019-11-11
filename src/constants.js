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
