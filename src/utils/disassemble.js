import SHA256 from 'crypto-js/sha256'

const maxarglen = 128

const methodnames = [
  'System.ExecutionEngine.GetScriptContainer',
  'System.ExecutionEngine.GetExecutingScriptHash',
  'System.ExecutionEngine.GetCallingScriptHash',
  'System.ExecutionEngine.GetEntryScriptHash',
  'System.Runtime.Platform',
  'System.Runtime.GetTrigger',
  'System.Runtime.CheckWitness',
  'System.Runtime.Notify',
  'System.Runtime.Log',
  'System.Runtime.GetTime',
  'System.Runtime.Serialize',
  'System.Runtime.Deserialize',
  'System.Runtime.GetInvocationCounter',
  'System.Runtime.GetNotifications',
  'System.Crypto.Verify',
  'System.Blockchain.GetHeight',
  'System.Blockchain.GetBlock',
  'System.Blockchain.GetTransaction',
  'System.Blockchain.GetTransactionHeight',
  'System.Blockchain.GetTransactionFromBlock',
  'System.Blockchain.GetContract',
  'System.Contract.Call',
  'System.Contract.Destroy',
  'System.Storage.GetContext',
  'System.Storage.GetReadOnlyContext',
  'System.Storage.Get',
  'System.Storage.Put',
  'System.Storage.PutEx',
  'System.Storage.Delete',
  'System.StorageContext.AsReadOnly',
  'Neo.Native.Deploy',
  'Neo.Crypto.CheckSig',
  'Neo.Crypto.CheckMultiSig',
  'Neo.Account.IsStandard',
  'Neo.Contract.Create',
  'Neo.Contract.Update',
  'Neo.Storage.Find',
  'Neo.Enumerator.Create',
  'Neo.Enumerator.Next',
  'Neo.Enumerator.Value',
  'Neo.Enumerator.Concat',
  'Neo.Iterator.Create',
  'Neo.Iterator.Key',
  'Neo.Iterator.Keys',
  'Neo.Iterator.Values',
  'Neo.Iterator.Concat',
  'Neo.Json.Serialize',
  'Neo.Json.Deserialize',
]

const opcodetable = {
  '0x00': { name: 'PUSHINT8', size: 1, type: 'bytes' },
  '0x01': { name: 'PUSHINT16', size: 2, type: 'bytes' },
  '0x02': { name: 'PUSHINT32', size: 4, type: 'bytes' },
  '0x03': { name: 'PUSHINT64', size: 8, type: 'bytes' },
  '0x04': { name: 'PUSHINT128', size: 16, type: 'bytes' },
  '0x05': { name: 'PUSHINT256', size: 32, type: 'bytes' },
  '0x0A': { name: 'PUSHA', size: 4, type: 'bytes' },
  '0x0B': { name: 'PUSHNULL', size: 0, type: '' },
  '0x0C': { name: 'PUSHDATA1', size: 1, type: 'bytes' },
  '0x0D': { name: 'PUSHDATA2', size: 2, type: 'bytes' },
  '0x0E': { name: 'PUSHDATA4', size: 4, type: 'bytes' },
  '0x0F': { name: 'PUSHM1', size: 0, type: '' },
  '0x10': { name: 'PUSH0', size: 0, type: '' },
  '0x11': { name: 'PUSH1', size: 0, type: '' },
  '0x12': { name: 'PUSH2', size: 0, type: '' },
  '0x13': { name: 'PUSH3', size: 0, type: '' },
  '0x14': { name: 'PUSH4', size: 0, type: '' },
  '0x15': { name: 'PUSH5', size: 0, type: '' },
  '0x16': { name: 'PUSH6', size: 0, type: '' },
  '0x17': { name: 'PUSH7', size: 0, type: '' },
  '0x18': { name: 'PUSH8', size: 0, type: '' },
  '0x19': { name: 'PUSH9', size: 0, type: '' },
  '0x1A': { name: 'PUSH10', size: 0, type: '' },
  '0x1B': { name: 'PUSH11', size: 0, type: '' },
  '0x1C': { name: 'PUSH12', size: 0, type: '' },
  '0x1D': { name: 'PUSH13', size: 0, type: '' },
  '0x1E': { name: 'PUSH14', size: 0, type: '' },
  '0x1F': { name: 'PUSH15', size: 0, type: '' },
  '0x20': { name: 'PUSH16', size: 0, type: '' },
  '0x21': { name: 'NOP', size: 0, type: '' },
  '0x22': { name: 'JMP', size: 1, type: 'bytes' },
  '0x23': { name: 'JMP_L', size: 4, type: 'bytes' },
  '0x24': { name: 'JMPIF', size: 1, type: 'bytes' },
  '0x25': { name: 'JMPIF_L', size: 4, type: 'bytes' },
  '0x26': { name: 'JMPIFNOT', size: 1, type: 'bytes' },
  '0x27': { name: 'JMPIFNOT_L', size: 4, type: 'bytes' },
  '0x28': { name: 'JMPEQ', size: 1, type: 'bytes' },
  '0x29': { name: 'JMPEQ_L', size: 4, type: 'bytes' },
  '0x2A': { name: 'JMPNE', size: 1, type: 'bytes' },
  '0x2B': { name: 'JMPNE_L', size: 4, type: 'bytes' },
  '0x2C': { name: 'JMPGT', size: 1, type: 'bytes' },
  '0x2D': { name: 'JMPGT_L', size: 4, type: 'bytes' },
  '0x2E': { name: 'JMPGE', size: 1, type: 'bytes' },
  '0x2F': { name: 'JMPGE_L', size: 4, type: 'bytes' },
  '0x30': { name: 'JMPLT', size: 1, type: 'bytes' },
  '0x31': { name: 'JMPLT_L', size: 4, type: 'bytes' },
  '0x32': { name: 'JMPLE', size: 1, type: 'bytes' },
  '0x33': { name: 'JMPLE_L', size: 4, type: 'bytes' },
  '0x34': { name: 'CALL', size: 1, type: 'bytes' },
  '0x35': { name: 'CALL_L', size: 4, type: 'bytes' },
  '0x36': { name: 'CALLA', size: 0, type: '' },
  '0x37': { name: 'ABORT', size: 0, type: '' },
  '0x38': { name: 'ASSERT', size: 0, type: '' },
  '0x3A': { name: 'THROW', size: 0, type: '' },
  '0x3B': { name: 'TRY', size: 2, type: 'bytes' },
  '0x3C': { name: 'TRY_L', size: 8, type: 'bytes' },
  '0x3D': { name: 'ENDTRY', size: 1, type: 'bytes' },
  '0x3E': { name: 'ENDTRY_L', size: 4, type: 'bytes' },
  '0x3F': { name: 'ENDFINALLY', size: 0, type: '' },
  '0x40': { name: 'RET', size: 0, type: '' },
  '0x41': { name: 'SYSCALL', size: 0, type: '' },
  '0x43': { name: 'DEPTH', size: 0, type: '' },
  '0x45': { name: 'DROP', size: 0, type: '' },
  '0x46': { name: 'NIP', size: 0, type: '' },
  '0x48': { name: 'XDROP', size: 0, type: '' },
  '0x49': { name: 'CLEAR', size: 0, type: '' },
  '0x4A': { name: 'DUP', size: 0, type: '' },
  '0x4B': { name: 'OVER', size: 0, type: '' },
  '0x4D': { name: 'PICK', size: 0, type: '' },
  '0x4E': { name: 'TUCK', size: 0, type: '' },
  '0x50': { name: 'SWAP', size: 0, type: '' },
  '0x51': { name: 'ROT', size: 0, type: '' },
  '0x52': { name: 'ROLL', size: 0, type: '' },
  '0x53': { name: 'REVERSE3', size: 0, type: '' },
  '0x54': { name: 'REVERSE4', size: 0, type: '' },
  '0x55': { name: 'REVERSEN', size: 0, type: '' },
  '0x56': { name: 'INITSSLOT', size: 1, type: 'bytes' },
  '0x57': { name: 'INITSLOT', size: 2, type: 'bytes' },
  '0x58': { name: 'LDSFLD0', size: 0, type: '' },
  '0x59': { name: 'LDSFLD1', size: 0, type: '' },
  '0x5A': { name: 'LDSFLD2', size: 0, type: '' },
  '0x5B': { name: 'LDSFLD3', size: 0, type: '' },
  '0x5C': { name: 'LDSFLD4', size: 0, type: '' },
  '0x5D': { name: 'LDSFLD5', size: 0, type: '' },
  '0x5E': { name: 'LDSFLD6', size: 0, type: '' },
  '0x5F': { name: 'LDSFLD', size: 0, type: '' },
  '0x60': { name: 'STSFLD0', size: 0, type: '' },
  '0x61': { name: 'STSFLD1', size: 0, type: '' },
  '0x62': { name: 'STSFLD2', size: 0, type: '' },
  '0x63': { name: 'STSFLD3', size: 0, type: '' },
  '0x64': { name: 'STSFLD4', size: 0, type: '' },
  '0x65': { name: 'STSFLD5', size: 0, type: '' },
  '0x66': { name: 'STSFLD6', size: 0, type: '' },
  '0x67': { name: 'STSFLD', size: 1, type: 'bytes' },
  '0x68': { name: 'LDLOC0', size: 0, type: '' },
  '0x69': { name: 'LDLOC1', size: 0, type: '' },
  '0x6A': { name: 'LDLOC2', size: 0, type: '' },
  '0x6B': { name: 'LDLOC3', size: 0, type: '' },
  '0x6C': { name: 'LDLOC4', size: 0, type: '' },
  '0x6D': { name: 'LDLOC5', size: 0, type: '' },
  '0x6E': { name: 'LDLOC6', size: 0, type: '' },
  '0x6F': { name: 'LDLOC6', size: 1, type: 'bytes' },
  '0x70': { name: 'STLOC0', size: 0, type: '' },
  '0x71': { name: 'STLOC1', size: 0, type: '' },
  '0x72': { name: 'STLOC2', size: 0, type: '' },
  '0x73': { name: 'STLOC3', size: 0, type: '' },
  '0x74': { name: 'STLOC4', size: 0, type: '' },
  '0x75': { name: 'STLOC5', size: 0, type: '' },
  '0x76': { name: 'STLOC6', size: 0, type: '' },
  '0x77': { name: 'STLOC7', size: 1, type: 'bytes' },
  '0x78': { name: 'LDARG0', size: 0, type: '' },
  '0x79': { name: 'LDARG1', size: 0, type: '' },
  '0x7A': { name: 'LDARG2', size: 0, type: '' },
  '0x7B': { name: 'LDARG3', size: 0, type: '' },
  '0x7C': { name: 'LDARG4', size: 0, type: '' },
  '0x7D': { name: 'LDARG5', size: 0, type: '' },
  '0x7E': { name: 'LDARG6', size: 0, type: '' },
  '0x7F': { name: 'LDARG', size: 1, type: 'bytes' },
  '0x80': { name: 'STARG0', size: 0, type: '' },
  '0x81': { name: 'STARG1', size: 0, type: '' },
  '0x82': { name: 'STARG2', size: 0, type: '' },
  '0x83': { name: 'STARG3', size: 0, type: '' },
  '0x84': { name: 'STARG4', size: 0, type: '' },
  '0x85': { name: 'STARG5', size: 0, type: '' },
  '0x86': { name: 'STARG6', size: 0, type: '' },
  '0x87': { name: 'STARG', size: 1, type: 'bytes' },
  '0x88': { name: 'NEWBUFFER', size: 0, type: '' },
  '0x89': { name: 'MEMCPY', size: 0, type: '' },
  '0x8B': { name: 'CAT', size: 0, type: '' },
  '0x8C': { name: 'SUBSTR', size: 0, type: '' },
  '0x8D': { name: 'LEFT', size: 0, type: '' },
  '0x8E': { name: 'RIGHT', size: 0, type: '' },
  '0x90': { name: 'INVERT', size: 0, type: '' },
  '0x91': { name: 'AND', size: 0, type: '' },
  '0x92': { name: 'OR', size: 0, type: '' },
  '0x93': { name: 'XOR', size: 0, type: '' },
  '0x97': { name: 'EQUAL', size: 0, type: '' },
  '0x98': { name: 'NOTEQUAL', size: 0, type: '' },
  '0x99': { name: 'SIGN', size: 0, type: '' },
  '0x9A': { name: 'ABS', size: 0, type: '' },
  '0x9B': { name: 'NEGATE', size: 0, type: '' },
  '0x9C': { name: 'INC', size: 0, type: '' },
  '0x9D': { name: 'DEC', size: 0, type: '' },
  '0x9E': { name: 'ADD', size: 0, type: '' },
  '0x9F': { name: 'SUB', size: 0, type: '' },
  '0xA0': { name: 'MUL', size: 0, type: '' },
  '0xA1': { name: 'DIV', size: 0, type: '' },
  '0xA2': { name: 'MOD', size: 0, type: '' },
  '0xA8': { name: 'SHL', size: 0, type: '' },
  '0xA9': { name: 'SHR', size: 0, type: '' },
  '0xAA': { name: 'NOT', size: 0, type: '' },
  '0xAB': { name: 'BOOLAND', size: 0, type: '' },
  '0xAC': { name: 'BOOLOR', size: 0, type: '' },
  '0xB1': { name: 'NZ', size: 0, type: '' },
  '0xB3': { name: 'NUMEQUAL', size: 0, type: '' },
  '0xB4': { name: 'NUMNOTEQUAL', size: 0, type: '' },
  '0xB5': { name: 'LT', size: 0, type: '' },
  '0xB6': { name: 'LE', size: 0, type: '' },
  '0xB7': { name: 'GT', size: 0, type: '' },
  '0xB8': { name: 'GE', size: 0, type: '' },
  '0xB9': { name: 'MIN', size: 0, type: '' },
  '0xBA': { name: 'MAX', size: 0, type: '' },
  '0xBB': { name: 'WITHIN', size: 0, type: '' },
  '0xC0': { name: 'PACK', size: 0, type: '' },
  '0xC1': { name: 'UNPACK', size: 0, type: '' },
  '0xC2': { name: 'NEWARRAY0', size: 0, type: '' },
  '0xC3': { name: 'NEWARRAY', size: 0, type: '' },
  '0xC4': { name: 'NEWARRAY_T', size: 1, type: 'bytes' },
  '0xC5': { name: 'NEWSTRUCT0', size: 0, type: '' },
  '0xC6': { name: 'NEWSTRUCT', size: 0, type: '' },
  '0xC8': { name: 'NEWMAP', size: 0, type: '' },
  '0xCA': { name: 'SIZE', size: 0, type: '' },
  '0xCB': { name: 'HASKEY', size: 0, type: '' },
  '0xCC': { name: 'KEYS', size: 0, type: '' },
  '0xCD': { name: 'VALUES', size: 0, type: '' },
  '0xCE': { name: 'PICKITEM', size: 0, type: '' },
  '0xCF': { name: 'APPEND', size: 0, type: '' },
  '0xD0': { name: 'SETITEM', size: 0, type: '' },
  '0xD1': { name: 'REVERSEITEMS', size: 0, type: '' },
  '0xD2': { name: 'REMOVE', size: 0, type: '' },
  '0xD3': { name: 'CLEARITEMS', size: 0, type: '' },
  '0xD8': { name: 'ISNULL', size: 0, type: '' },
  '0xD9': { name: 'ISTYPE', size: 1, type: 'bytes' },
  '0xDB': { name: 'CONVERT', size: 1, type: 'bytes' },
}

export async function disassemble(encodedScript) {
  let out = ''
  if (encodedScript === undefined) return out

  const script = encodedScript

  // resolve all interop method names to 32-bit hash
  let interopmethod = {}
  for (let i = 0; i < methodnames.length; i++) {
    let hash = SHA256(methodnames[i]).toString().slice(0, 8)
    interopmethod[hash] = methodnames[i]
  }

  // disassemble
  for (let i = 0; i < script.length; i += 2) {
    let inst
    let opcode = script.slice(i, i + 2)
    if (opcodetable.hasOwnProperty(opcode)) {
      const opcodedata = opcodetable[opcode]
      inst = opcodedata.name

      if (opcodedata.name === 'SYSCALL') {
        const hash = script.slice(i + 2, i + 10)
        inst += ' ' + interopmethod[hash]
      } else if (opcodedata.type === 'int') {
        inst +=
          ' ' + parseInt(script.slice(i + 2, i + 2 + opcodedata.size * 2), 16)
      } else if (opcodedata.type === 'bytes') {
        let fulldata = script.slice(i + 2, i + 2 + opcodedata.size * 2)
        if (fulldata.length > maxarglen) {
          inst += ' ' + fulldata.slice(0, maxarglen) + '...'
        } else {
          inst += ' ' + fulldata
        }
      } else if (opcodedata.type === 'read') {
        const datalen = parseInt(
          script.slice(i + 2, i + 2 + opcodedata.size * 2),
          16,
        )
        const start = i + 2 + opcodedata.size * 2
        const fulldata = script.slice(start, start + datalen)
        if (fulldata.length > maxarglen) {
          inst += ' ' + fulldata.slice(0, maxarglen) + '...'
        } else {
          inst += ' ' + fulldata
        }
        i += fulldata.length
      }
      i += parseInt(opcodedata.size) * 2
    } else {
      inst = 'INVALID_OPCODE ' + opcode
    }
    out += inst + '\n'
  }
  return out
}
