import React from 'react';
import TreeComponent from './TreeComponent';

const data = [
    {
        name: 'level-1-a',
        children: [
            {
                name: 'level-2-a',
                children: [
                    {
                        name: 'level-3-a'
                    },
                    {
                        name: 'level-3-b'
                    }
                ]
            },
            {
                name: 'level-2-b'
            }
        ]
    },
    {
        name: 'level-1-b',
        children: [
            {
                name: 'level-2-c'
            }
        ]
    }
];


function TreeView() {
  return (
    <>
    <TreeComponent data={data}/>
    </>
  )
}

export default TreeView