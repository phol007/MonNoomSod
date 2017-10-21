<template>
	<div id="main_menu">
		<div class="content">
			<h1>{{ titlePage }}</h1>
			<div class="content-menu">
				<button type="button" class="btn btn-outline-danger menu-list">
				<img src="../assets/people.png" alt="">
				<h2>จัดการผู้ใช้งาน</h2>
				</button>
				<button type="button" class="btn btn-outline-danger menu-list">
				<img src="../assets/menu.png" alt="">
				<h2>จัดการเมนูสินค้า</h2>
				</button>
				<button type="button" class="btn btn-outline-danger menu-list" @click="goto('Sale')">
				<img src="../assets/resturant.png" alt="">
				<h2>โปรแกรมขาย</h2>
				</button>
				<button type="button" class="btn btn-outline-danger menu-list">
				<img src="../assets/report.png" alt="">
				<h2>รายงานการขาย</h2>
				</button>
				<button type="button" class="btn btn-outline-danger menu-list">
				<img src="../assets/settings.png" alt="">
				<h2>ตั้งค่าระบบ</h2>
				</button>
			</div>			
		</div>
	</div>
</template>
<script src="../js/main_menu.js"></script>