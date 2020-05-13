let CryptoJS = require('crypto-js')
let SHA256 = CryptoJS.SHA256

const opcodetable = {
  0x00: { name: 'PUSHINT8', size: 1},
  0x01: { name: 'PUSHINT16', size: 2},
  0x02: { name: 'PUSHINT32', size: 4},
  0x03: { name: 'PUSHINT64', size: 8},
  0x04: { name: 'PUSHINT128', size: 16},
  0x05: { name: 'PUSHINT256', size: 32},
  0x0A: { name: 'PUSHA', size: 4},
  0x0B: { name: 'PUSHNULL', size: 0},
  0x0C: { name: 'PUSHDATA1', size: 1},
  0x0D: { name: 'PUSHDATA2', size: 2},
  0x0E: { name: 'PUSHDATA4', size: 4},
  0x0F: { name: 'PUSHM1', size: 0},
  0x10: { name: 'PUSH0', size: 0},
  0x11: { name: 'PUSH1', size: 0},
  0x12: { name: 'PUSH2', size: 0},
  0x13: { name: 'PUSH3', size: 0},
  0x14: { name: 'PUSH4', size: 0},
  0x15: { name: 'PUSH5', size: 0},
  0x16: { name: 'PUSH6', size: 0},
  0x17: { name: 'PUSH7', size: 0},
  0x18: { name: 'PUSH8', size: 0},
  0x19: { name: 'PUSH9', size: 0},
  0x1A: { name: 'PUSH10', size: 0},
  0x1B: { name: 'PUSH11', size: 0},
  0x1C: { name: 'PUSH12', size: 0},
  0x1D: { name: 'PUSH13', size: 0},
  0x1E: { name: 'PUSH14', size: 0},
  0x1F: { name: 'PUSH15', size: 0},
  0x20: { name: 'PUSH16', size: 0},
  0x21: { name: 'NOP', size: 0},
  0x22: { name: 'JMP', size: 1},
  0x23: { name: 'JMP_L', size: 4},
  0x24: { name: 'JMPIF', size: 1},
  0x25: { name: 'JMPIF_L', size: 4},
  0x26: { name: 'JMPIFNOT', size: 1},
  0x27: { name: 'JMPIFNOT_L', size: 4},
  0x28: { name: 'JMPEQ', size: 1},
  0x29: { name: 'JMPEQ_L', size: 4},
  0x2A: { name: 'JMPNE', size: 1},
  0x2B: { name: 'JMPNE_L', size: 4},
  0x2C: { name: 'JMPGT', size: 1},
  0x2D: { name: 'JMPGT_L', size: 4},
  0x2E: { name: 'JMPGE', size: 1},
  0x2F: { name: 'JMPGE_L', size: 4},
  0x30: { name: 'JMPLT', size: 1},
  0x31: { name: 'JMPLT_L', size: 4},
  0x32: { name: 'JMPLE', size: 1},
  0x33: { name: 'JMPLE_L', size: 4},
  0x34: { name: 'CALL', size: 1},
  0x35: { name: 'CALL_L', size: 4},
  0x36: { name: 'CALLA', size: 0},
  0x37: { name: 'ABORT', size: 0},
  0x38: { name: 'ASSERT', size: 0},
  0x3A: { name: 'THROW', size: 0},
  0x3B: { name: 'TRY', size: 2},
  0x3C: { name: 'TRY_L', size: 8},
  0x3D: { name: 'ENDTRY', size: 1},
  0x3E: { name: 'ENDTRY_L', size: 4},
  0x3F: { name: 'ENDFINALLY', size: 0},
  0x40: { name: 'RET', size: 0},
  0x41: { name: 'SYSCALL', size: 4},
  0x43: { name: 'DEPTH', size: 0},
  0x45: { name: 'DROP', size: 0},
  0x46: { name: 'NIP', size: 0},
  0x48: { name: 'XDROP', size: 0},
  0x49: { name: 'CLEAR', size: 0},
  0x4A: { name: 'DUP', size: 0},
  0x4B: { name: 'OVER', size: 0},
  0x4D: { name: 'PICK', size: 0},
  0x4E: { name: 'TUCK', size: 0},
  0x50: { name: 'SWAP', size: 0},
  0x51: { name: 'ROT', size: 0},
  0x52: { name: 'ROLL', size: 0},
  0x53: { name: 'REVERSE3', size: 0},
  0x54: { name: 'REVERSE4', size: 0},
  0x55: { name: 'REVERSEN', size: 0},
  0x56: { name: 'INITSSLOT', size: 1},
  0x57: { name: 'INITSLOT', size: 2},
  0x58: { name: 'LDSFLD0', size: 0},
  0x59: { name: 'LDSFLD1', size: 0},
  0x5A: { name: 'LDSFLD2', size: 0},
  0x5B: { name: 'LDSFLD3', size: 0},
  0x5C: { name: 'LDSFLD4', size: 0},
  0x5D: { name: 'LDSFLD5', size: 0},
  0x5E: { name: 'LDSFLD6', size: 0},
  0x5F: { name: 'LDSFLD', size: 0},
  0x60: { name: 'STSFLD0', size: 0},
  0x61: { name: 'STSFLD1', size: 0},
  0x62: { name: 'STSFLD2', size: 0},
  0x63: { name: 'STSFLD3', size: 0},
  0x64: { name: 'STSFLD4', size: 0},
  0x65: { name: 'STSFLD5', size: 0},
  0x66: { name: 'STSFLD6', size: 0},
  0x67: { name: 'STSFLD', size: 1},
  0x68: { name: 'LDLOC0', size: 0},
  0x69: { name: 'LDLOC1', size: 0},
  0x6A: { name: 'LDLOC2', size: 0},
  0x6B: { name: 'LDLOC3', size: 0},
  0x6C: { name: 'LDLOC4', size: 0},
  0x6D: { name: 'LDLOC5', size: 0},
  0x6E: { name: 'LDLOC6', size: 0},
  0x6F: { name: 'LDLOC6', size: 1},
  0x70: { name: 'STLOC0', size: 0},
  0x71: { name: 'STLOC1', size: 0},
  0x72: { name: 'STLOC2', size: 0},
  0x73: { name: 'STLOC3', size: 0},
  0x74: { name: 'STLOC4', size: 0},
  0x75: { name: 'STLOC5', size: 0},
  0x76: { name: 'STLOC6', size: 0},
  0x77: { name: 'STLOC7', size: 1},
  0x78: { name: 'LDARG0', size: 0},
  0x79: { name: 'LDARG1', size: 0},
  0x7A: { name: 'LDARG2', size: 0},
  0x7B: { name: 'LDARG3', size: 0},
  0x7C: { name: 'LDARG4', size: 0},
  0x7D: { name: 'LDARG5', size: 0},
  0x7E: { name: 'LDARG6', size: 0},
  0x7F: { name: 'LDARG', size: 1},
  0x80: { name: 'STARG0', size: 0},
  0x81: { name: 'STARG1', size: 0},
  0x82: { name: 'STARG2', size: 0},
  0x83: { name: 'STARG3', size: 0},
  0x84: { name: 'STARG4', size: 0},
  0x85: { name: 'STARG5', size: 0},
  0x86: { name: 'STARG6', size: 0},
  0x87: { name: 'STARG', size: 1},
  0x88: { name: 'NEWBUFFER', size: 0},
  0x89: { name: 'MEMCPY', size: 0},
  0x8B: { name: 'CAT', size: 0},
  0x8C: { name: 'SUBSTR', size: 0},
  0x8D: { name: 'LEFT', size: 0},
  0x8E: { name: 'RIGHT', size: 0},
  0x90: { name: 'INVERT', size: 0},
  0x91: { name: 'AND', size: 0},
  0x92: { name: 'OR', size: 0},
  0x93: { name: 'XOR', size: 0},
  0x97: { name: 'EQUAL', size: 0},
  0x98: { name: 'NOTEQUAL', size: 0},
  0x99: { name: 'SIGN', size: 0},
  0x9A: { name: 'ABS', size: 0},
  0x9B: { name: 'NEGATE', size: 0},
  0x9C: { name: 'INC', size: 0},
  0x9D: { name: 'DEC', size: 0},
  0x9E: { name: 'ADD', size: 0},
  0x9F: { name: 'SUB', size: 0},
  0xA0: { name: 'MUL', size: 0},
  0xA1: { name: 'DIV', size: 0},
  0xA2: { name: 'MOD', size: 0},
  0xA8: { name: 'SHL', size: 0},
  0xA9: { name: 'SHR', size: 0},
  0xAA: { name: 'NOT', size: 0},
  0xAB: { name: 'BOOLAND', size: 0},
  0xAC: { name: 'BOOLOR', size: 0},
  0xB1: { name: 'NZ', size: 0},
  0xB3: { name: 'NUMEQUAL', size: 0},
  0xB4: { name: 'NUMNOTEQUAL', size: 0},
  0xB5: { name: 'LT', size: 0},
  0xB6: { name: 'LE', size: 0},
  0xB7: { name: 'GT', size: 0},
  0xB8: { name: 'GE', size: 0},
  0xB9: { name: 'MIN', size: 0},
  0xBA: { name: 'MAX', size: 0},
  0xBB: { name: 'WITHIN', size: 0},
  0xC0: { name: 'PACK', size: 0},
  0xC1: { name: 'UNPACK', size: 0},
  0xC2: { name: 'NEWARRAY0', size: 0},
  0xC3: { name: 'NEWARRAY', size: 0},
  0xC4: { name: 'NEWARRAY_T', size: 1},
  0xC5: { name: 'NEWSTRUCT0', size: 0},
  0xC6: { name: 'NEWSTRUCT', size: 0},
  0xC8: { name: 'NEWMAP', size: 0},
  0xCA: { name: 'SIZE', size: 0},
  0xCB: { name: 'HASKEY', size: 0},
  0xCC: { name: 'KEYS', size: 0},
  0xCD: { name: 'VALUES', size: 0},
  0xCE: { name: 'PICKITEM', size: 0},
  0xCF: { name: 'APPEND', size: 0},
  0xD0: { name: 'SETITEM', size: 0},
  0xD1: { name: 'REVERSEITEMS', size: 0},
  0xD2: { name: 'REMOVE', size: 0},
  0xD3: { name: 'CLEARITEMS', size: 0},
  0xD8: { name: 'ISNULL', size: 0},
  0xD9: { name: 'ISTYPE', size: 1},
  0xDB: { name: 'CONVERT', size: 1},
}
const methodnames = [
  'System.Binary.Serialize',
  'System.Binary.Deserialize',
  'System.Blockchain.GetHeight',
  'System.Blockchain.GetBlock',
  'System.Blockchain.GetTransaction',
  'System.Blockchain.GetTransactionHeight',
  'System.Blockchain.GetTransactionFromBlock',
  'System.Blockchain.GetContract',
  'Neo.Contract.Create',
  'Neo.Contract.Update',
  'System.Contract.Destroy',
  'System.Contract.Call',
  'System.Contract.CallEx',
  'System.Contract.IsStandard',
  'System.Contract.CreateStandardAccount',
  'Neo.Crypto.ECDsaVerify',
  'Neo.Crypto.ECDsaCheckMultiSig',
  'System.Enumerator.Create',
  'System.Enumerator.Next',
  'System.Enumerator.Value',
  'System.Enumerator.Concat',
  'System.Iterator.Create',
  'System.Iterator.Key',
  'System.Iterator.Values',
  'System.Iterator.Concat',
  'System.Json.Serialize',
  'System.Json.Deserialize',
  'Neo.Native.Deploy',
  'System.Runtime.Platform',
  'System.Runtime.GetTrigger',
  'System.Runtime.GetTime',
  'System.Runtime.GetScriptContainer',
  'System.Runtime.GetExecutingScriptHash',
  'System.Runtime.GetCallingScriptHash',
  'System.Runtime.GetEntryScriptHash',
  'System.Runtime.CheckWitness',
  'System.Runtime.GetInvocationCounter',
  'System.Runtime.Log',
  'System.Runtime.Notify',
  'System.Runtime.GetNotifications',
  'System.Runtime.GasLeft',
  'System.Storage.GetContext',
  'System.Storage.GetReadOnlyContext',
  'System.StorageContext.AsReadOnly',
  'System.Storage.Get',
  'System.Storage.Find',
  'System.Storage.Put',
  'System.Storage.PutEx',
  'System.Storage.Delete',
]

// resolve all interop method names to 32-bit hash
let interopmethod = {}
for (let i = 0; i < methodnames.length; i++) {
  let data = Buffer.from(methodnames[i], 'utf8').toString('hex')
  let datawords = CryptoJS.enc.Hex.parse(data)
  let hash_buffer = Buffer.from(SHA256(datawords).toString(),'hex')
  interopmethod[hash_buffer.readUInt32LE(0)] = methodnames[i]
}

export function disassemble(base64_encoded_script) {
  let out = ''
  const script = Buffer.from(base64_encoded_script,"base64")

  let ip = 0;
  while (ip < script.length) {
    let opcode = script[ip]
    if (opcodetable.hasOwnProperty(opcode)) {
      const opcodedata = opcodetable[opcode]
      let inst = opcodedata.name

      if (opcodedata.name === "SYSCALL") {
        const hash = script.readUInt32LE(ip + 1)
        let interop_name = interopmethod[hash]
        if (interop_name == null)
          interop_name = hash
        out += `${inst} ${interop_name}\n`
        ip += 4
      } else if (opcodedata.size === 0) {
        out += `${inst}\n`
      } else {
        if (inst === "PUSHDATA1" || inst === "PUSHDATA2" || inst === "PUSHDATA4") {
          switch (opcodedata.size) {
            case 1: {
              let data_size = script.readUInt8(ip + 1)
              let data = script.slice(ip + 2, ip + 2 + data_size)
              out += `${inst} ${data.toString('hex')}\n`
              ip += opcodedata.size + data_size
              break
            }
            case 2: {
              const SIZE_LEN = 2
              let data_size = script.readUInt16LE(ip + 1)
              const DATA_START_IDX = ip + SIZE_LEN + 1
              let data = script.slice(DATA_START_IDX, DATA_START_IDX + data_size)
              out += `${inst} ${data.toString('hex')}\n`
              ip += opcodedata.size + data_size
              break
            }
            case 4: {
              const SIZE_LEN = 4
              let data_size = script.readInt32LE(ip + 1)
              const DATA_START_IDX = ip + SIZE_LEN + 1
              let data = script.slice(DATA_START_IDX, DATA_START_IDX + data_size)
              out += `${inst} ${data.toString('hex')}\n`
              ip += opcodedata.size + data_size
              break
            }
            default:
              out += `INVALID OPCODE DATA CASE [${ip},${inst} ${opcodedata.size}]`
              break
          }
        } else {
          let data = script.slice(ip + 1, ip + 1 + opcodedata.size)
          out += `${inst} ${data.toString('hex')}\n`
          ip += opcodedata.size
        }
      }
    } else {
      out += `INVALID OPCODE ${opcode.toString()}\n`
    }
    ip++
  }
  return out
}
