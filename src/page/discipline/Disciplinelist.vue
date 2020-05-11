<template>
	<div class="discipline-list home-con">
		<el-breadcrumb separator="/" style="margin-bottom: 15px;">
			<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>学科管理</el-breadcrumb-item>
			<el-breadcrumb-item>学科列表</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="add-discipline" style="margin-bottom: 22px;"><el-button type="primary">新增学科</el-button></div>
		<el-table :data="tableData" border style="width: 100%;flex: 1;display: flex;flex-direction: column;overflow: hidden;">
			<el-table-column type="index" label="#" width="180"></el-table-column>
			<el-table-column prop="name" label="学科名称" width="180"></el-table-column>
			<el-table-column prop="img" label="图片" style="overflow: hidden;" width="180">
				<template slot-scope="scope">
					<img :src="scope.row.img" style="width: auto; height: 92px;max-width: 180px;" />
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="primary" plain size="medium" icon="el-icon-edit" circle></el-button>
					<el-button type="danger" plain size="medium" icon="el-icon-delete" circle></el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import { disciplineIist } from '../../http/api.js';
export default {
	data() {
		return {
			tableData: []
		};
	},
	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			disciplineIist().then(res => {
				this.tableData = res.data;
			});
		}
	}
};
</script>
