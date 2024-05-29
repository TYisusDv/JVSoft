import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faFingerprint } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal';
import SendData from '../SendData';
import Edit from './Edit';

const TableBody = ({ data, setBtnEdit, newModal, removeModal, newAlert, removeAlert, reloadTable }) => {
    const handleEdit = (entry) => {
        newModal({
            'id': `movement-types-edit-${entry.id}-modal`,
            'app':  
                <Modal 
                    key={`movement-types-edit-${entry.id}-modal`} 
                    id={`movement-types-edit-${entry.id}-modal`} 
                    color={'warning'}
                    title={'Editar tipo de movimiento'} 
                    body={
                        <SendData
                            endpoint={'/movement/types'}
                            type={'PUT'}
                            data={{
                                'id': entry.id,
                                'name': entry.name,
                                'status': entry.status,
                            }}
                            body={<Edit />}
                            newAlert={newAlert} 
                            removeAlert={removeAlert} 
                            reloadTable={reloadTable} 
                        />
                    } 
                    removeModal={removeModal} 
                />
        });

        setBtnEdit( 
            <button 
                className='btn btn-sm btn-warning'
                disabled
            >
                <FontAwesomeIcon icon={faEdit} /> Editar
            </button>
        );
    };  

    const handleClick = (entry) => {
        setBtnEdit(
            <button 
                className='btn btn-sm btn-warning' 
                onClick={() => handleEdit(entry)}
            >
                <FontAwesomeIcon icon={faEdit} /> Editar
            </button>
        );
    };   

    return (
        <tbody>
            {data.map((entry, index) => (
                <tr 
                    key={index}
                    onClick={() => handleClick(entry)}
                >
                    <td><span className='badge'><FontAwesomeIcon icon={faFingerprint} /> {entry.id}</span></td>
                    <td>{entry.name}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
