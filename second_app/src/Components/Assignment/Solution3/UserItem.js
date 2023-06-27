import React from 'react'
let a="User List: "
export default function UserItem({id,name,email}) {
  return (
    <div>
        <h3>{name}({email})</h3>
    </div>
  )
}
