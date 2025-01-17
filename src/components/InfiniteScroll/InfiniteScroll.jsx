import React, { useEffect, useState } from 'react';
import Card from './Card';

const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=15');
  return await response.json();
};

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const newData = await fetchData();
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleScroll = async () => {
    const { scrollHeight } = document.body;
    const { innerHeight, scrollY } = window;
    if (scrollHeight <= innerHeight + scrollY + 10 && !loading) {
      await fetchProduct();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <div>InfiniteScroll</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
      {loading && <div>...Loading</div>}
    </div>
  );
}

export default InfiniteScroll;
