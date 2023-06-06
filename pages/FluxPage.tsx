import React, { useState } from 'react';
interface Contract {
    deployedAddress: string;
    contractAbi: string;
    deploymentChain: string;
}
  
interface AddContractProps {
    onContractAdded: (contract: Contract) => void;
}
  

const SIDEBAR = ['Add Contract', 'Contracts', 'Decode', 'Get notifs'];

function AddContract({ onContractAdded }: AddContractProps) {
    const [deployedAddress, setDeployedAddress] = useState('');
    const [contractAbi, setContractAbi] = useState('');
    const [deploymentChain, setDeploymentChain] = useState('');
    
    const handleClick = () => {
        const contract: Contract = { deployedAddress, contractAbi, deploymentChain };
        onContractAdded(contract);
        setDeployedAddress('');
        setContractAbi('');
        setDeploymentChain('');
    };
    
    return (
        <div className='flex flex-col'>
            <label className='text-3xl mb-[20px]'>Add Contract Details</label>
            <label className='text-md mb-[5px]'>Deployed Address</label>
            <input type="text" onChange={e => setDeployedAddress(e.target.value)} placeholder='0xabcd...' className='rounded-md h-[40px] bg-white mb-[20px] text-black'/>
            <label className='text-md mb-[5px]'>Contract ABI</label>
            <textarea onChange={e => setContractAbi(e.target.value)} className='rounded-md h-[200px] bg-white mb-[20px] text-black'></textarea>
            <label className='text-md mb-[5px]'>Deployment Chain</label>
            <input type="text" onChange={e => setDeploymentChain(e.target.value)} placeholder='chain' className='rounded-md h-[40px] bg-white mb-[50px] text-black'/>
            <button className='rounded-md bg-white text-black w-[fit-content] mx-[46%] px-[4%] py-[8px]' onClick={handleClick}>Add</button>
        </div>
      );
    }
    
    
function App() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  const handleAddressClick = (contract: Contract) => {
    setSelectedContract(contract);
  };

  const handleContractAdded = (contract: Contract) => {
    setContracts([...contracts, contract]);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'Add Contract':
        return <AddContract onContractAdded={handleContractAdded} />;
        case 'Contracts':
            return (
              <div className="flex flex-col">
                <label className="text-3xl mb-[30px]">My Contracts</label>
                <div className="flex mb-4">
                  <div className="w-1/2 text-xl">Address</div>
                  <div className="w-1/2 text-xl">Chain</div>
                </div>
                {contracts.map((contract, index) => (
                  <div key={index} className="flex mb-1 py-[5px]">
                    <div className="w-1/2">{contract.deployedAddress}</div>
                    <div className="w-1/2">{contract.deploymentChain}</div>
                  </div>
                ))}
              </div>
            )          
        case 'Decode':
      return (
        <div className='flex flex-col'>
          <label className='text-3xl mb-[10px]'>Decode Functions</label>
          <label className='text-md mb-[10px]'>Select Contract</label>
          <div  className='flex flex-row space-x-10 mb-[40px]'>
            {contracts.map((contract, index) => (
                <button key={index} onClick={() => handleAddressClick(contract)} className='bg-white text-black p-[4px] rounded-md'>
                    {contract.deployedAddress}
                </button>
            ))}
          </div>
          <label className='mb-[10px]'>Available functions in {selectedContract?.deployedAddress} :</label>
          {selectedContract && (
            <div>
              {JSON.parse(selectedContract.contractAbi)
                .filter((entry : any) => entry.type === 'function')
                .map((func : any, index : any) => (
                  <p className='bg-gray-700 mb-[5px] w-[fit-content] p-[2px] rounded-md' key={index}>{`${func.name}(${func.inputs.map((input : any) => input.type).join(', ')})`}</p>
                ))
              }
            </div>
          )}
        </div>
      );

      default:
        return null;
    }
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1em', borderBottom: '1px solid black' }}>
        <div>Bytekode</div>
        <button>Add Wallet</button>
      </nav>

      <div style={{ display: 'flex', height: '100%' }}>
        <aside style={{ borderRight: '1px solid black', width: '200px', padding: '1em' }}>
          {SIDEBAR.map(item => (
            <button key={item} onClick={() => setActiveItem(item)} style={{ display: 'block', marginBottom: '1em' }}>
              {item}
            </button>
          ))}
        </aside>

        <main style={{ flex: 1, padding: '1em' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;