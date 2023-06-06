import React, { useState } from 'react';
interface Contract {
    deployedAddress: string;
    contractAbi: string;
    deploymentChain: string;
}
  
interface AddContractProps {
    onContractAdded: (contract: Contract) => void;
}
  

const SIDEBAR = ['Add Contract', 'My Contracts', 'Decode', 'Get notifs'];

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
            <input type="text" onChange={e => setDeployedAddress(e.target.value)}  className='rounded-md h-[40px] bg-white mb-[20px] text-black'/>
            <label className='text-md mb-[5px]'>Contract ABI</label>
            <textarea onChange={e => setContractAbi(e.target.value)} className='rounded-md h-[200px] bg-white mb-[20px] text-black'></textarea>
            <label className='text-md mb-[5px]'>Deployment Chain</label>
            <input type="text" onChange={e => setDeploymentChain(e.target.value)} className='rounded-md h-[40px] bg-white mb-[20px] text-black'/>
            <button onClick={handleClick}>Add</button>
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
      case 'My Contracts':
        return (
          <div>
            {contracts.map((contract, index) => (
              <div key={index}>
                <p>Deployed Address: {contract.deployedAddress}</p>
                {/* <p>Contract ABI: {contract.contractAbi}</p>
                <p>Deployment Chain: {contract.deploymentChain}</p> */}
              </div>
            ))}
          </div>
        );
        case 'Decode':
      return (
        <div>
          <h3>Deployed Addresses:</h3>
          {contracts.map((contract, index) => (
            <button key={index} onClick={() => handleAddressClick(contract)}>
              {contract.deployedAddress}
            </button>
          ))}
          {selectedContract && (
            <div>
              <h3>Available functions in {selectedContract.deployedAddress}:</h3>
              {JSON.parse(selectedContract.contractAbi)
                .filter((entry : any) => entry.type === 'function')
                .map((func : any, index : any) => (
                  <p key={index}>{`${func.name}(${func.inputs.map((input : any) => input.type).join(', ')})`}</p>
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