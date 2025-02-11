import React, { useState } from 'react';

function TreeComponent({ data }) {
  return (
    <div className="space-y-2">
      {data?.map((item, index) => (
        <TreeNode key={index} node={item} />
      ))}
    </div>
  );
}

function TreeNode({ node }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className={`ml-${node.children ? 4 : 0}`}>
      <div className="flex items-center space-x-2">
        {node.children && (
          <button
            className="text-blue-500 hover:text-blue-700 font-bold"
            onClick={handleToggle}
          >
            {isExpanded ? '[-]' : '[+]'}
          </button>
        )}
        <span className="font-semibold text-gray-700">{node.name}</span>
      </div>

      {isExpanded && node.children && (
        <div className="ml-5">
          <TreeComponent data={node.children} />
        </div>
      )}
    </div>
  );
}

export default TreeComponent;
