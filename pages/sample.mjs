import { Dcyfr } from 'bytekode-eth-decoder'

const contract_abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			}
		],
		"name": "Addition",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "n1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "n2",
				"type": "uint256"
			}
		],
		"name": "getSum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const abi = contract_abi
const dcyfr = new Dcyfr(abi)
const data = '0x8e86b12500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002'
const decodedResponse = dcyfr.getTxInfoFromData({data})
console.log(decodedResponse)