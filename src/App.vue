<template>
	<div id="app"><router-view /></div>
</template>

<style>
.el-header {
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}
.title {
	height: 60px;
	line-height: 60px;
	text-align: center;
	color: #fff;
}
.el-aside {
	color: #333;
}
.el-menu {
	border: none !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
.el-main {
	padding: 15px;
	background: #eee;
}
.home-con {
	padding: 15px;
	background: #fff;
	border-radius: 5px;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}
.el-table__body-wrapper {
	flex: 1;
	overflow-y: auto !important;
}
.el-table__body-wrapper::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
	background: #666666;
	border-radius: 5px;
}
.el-table__body-wrapper::-webkit-scrollbar-track {
	background: #ccc;
	border-radius: 5px;
}
.has-gutter tr:last-child {
	padding-right: 10px;
	width: 100% !important;
	box-sizing: border-box;
}
.seek-topic .el-input__inner,
.seek-idea .el-input__inner {
	border-top-right-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
}
.seek-btn {
	background-color: #f5f7fa;
	color: #909399;
	vertical-align: middle;
	display: table-cell;
	position: relative;
	border: 1px solid #dcdfe6;
	border-radius: 4px;
	padding: 0 20px;
	width: 56px;
	white-space: nowrap;
	border-top-left-radius: 0px !important;
	border-bottom-left-radius: 0px !important;
	outline: none;
	border-left: none;
	cursor: pointer;
}
.el-table .cell {
	text-overflow: clip;
}
</style>
