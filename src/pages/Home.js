import { useState, useEffect } from 'react'
import Card from '../components/Card';
import { getRecords } from '../service/Service'

const Home = () => {
    const [records, setRecords] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getRecords().then((data) => {
            setRecords(data)
        });
    }, []);

    let recordPerPage = 9;
    const totalPages = Math.ceil(records.length / recordPerPage);
    const lastPage = currentPage * recordPerPage;
    const firstPage = lastPage - recordPerPage;
    const data = records.slice(firstPage, lastPage);

    return (
        <div className='container-fluid my-3'>
            <div className='row'>
                {
                    data.map((item) => <Card item={item} key={item.id} />)
                }
            </div>
            <div className='text-center mt-5'>
                <button className='btn btn-primary me-3' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} >
                    Previous
                </button>
                <button className='btn btn-success ms-3' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Home