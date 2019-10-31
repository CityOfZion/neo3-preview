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
  `https://2708pm0epa.execute-api.us-east-1.amazonaws.com/dev/${net}/v1`

// TODO: implement a much better solution
export const CONVERT_TO_DECIMAL = value => value / 100000000

export const TRANSFER = '5472616e73666572'
