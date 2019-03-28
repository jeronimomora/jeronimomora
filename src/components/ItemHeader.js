import React from 'react'

const ItemHeader = (props) => (
	<div>
		<h3 style={{marginBottom:0}}>
			{props.header || "My header"}
		</h3>
	</div>
)

export default ItemHeader