<template>
	<div id="Sale">
		<div class="content" style="padding:0;">
			
			<div class="menu-select">
				เมนูหลัก
				<div class="menu-select-cont">
					<div class="menu-select-list menu-select-active">
						<img src="static/img/menu/bottle.png" alt="">
						<p>เครื่องดื่มขวด</p>
					</div>
					<div class="menu-select-list">
						<img src="static/img/menu/cup.png" alt="">
						<p>แก้ว</p>
					</div>
					<div class="menu-select-list">
						<img src="static/img/menu/bread.png" alt="">
						<p>ขนมปังนึ่ง</p>
					</div>
					<div class="menu-select-list">
						<img src="static/img/menu/bakery.png" alt="">
						<p>เบเกอรี่ / เค้ก</p>
					</div>
					<div class="menu-select-list">
						<img src="static/img/menu/yogurt.png" alt="">
						<p>โยเกิร์ต / พุดดิ้ง</p>
					</div>
				</div>
			</div>
			<div class="item-select">
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>		
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>	
				<div class="item-list" @click="show_sck">
					<div class="item-list-img">
						<img src="static/img/item/test_menu.jpg" alt="item">
					</div>
					<div class="item-list-name">
						ขนมปังโฮลวีท
					</div>
				</div>			
			</div>
			<div class="payment">
				<div class="payment-count-order">
					จำนวนรายการ 0 รายการ
					<p>รายการ</p>
				</div>
				<div class="payment-order-list">
					<div class="order-list">
						<div class="order-list-name">
							1. ขนมปังโฮวีท
						</div>
						<div class="order-list-count">
							x 1
						</div>
						<div class="order-list-price">
							40
						</div>
						<div class="order-list-delete">
							<button type="button" class="btn btn-danger" @click="remove_item"> 
								<i class="fa fa-times" aria-hidden="true"></i>
							</button>
						</div>
					</div>
				</div>
				<div class="payment-type">
					<div class="payment-title">
						ประเภทการขาย
					</div>
					<div class="payment-detail">
					<select class="form-control">
				      <option> <i class="fa fa-cutlery" aria-hidden="true"></i> ทานที่ร้าน</option>
				      <option> <i class="fa fa-home" aria-hidden="true"></i> ซื้อกลับบ้าน</option>
				    </select>
					</div>
				</div>
				<div class="payment-discount">
					<div class="payment-title">
						ส่วนลด
					</div>
					<div class="payment-detail">
						<input type="text" class="form-control" id="discount" placeholder="0.00">
					</div>
				</div>
				<div class="payment-netvat">
					<div class="payment-title">
						ภาษีมูลค่าเพิ่ม 7% = 
					</div>
					<div class="payment-detail">
						0.00
					</div>
				</div>
				<div class="payment-netamount">
					<div class="payment-title">
						ยอดรวมสุทธิ
					</div>
					<div class="payment-detail">
						0.00
					</div>
				</div>
				<div class="payment-button">
					<hr style="margin:0 0 2% 0; padding:0;">
					<button type="button" class="btn btn-danger btn-lg">Clear</button>
					<button type="button" class="btn btn-success btn-lg">ชำระเงิน</button>

				</div>
			</div>
			<div class="btn btn-danger button-payment-mobile" @click="show_mobile_payment">
				รายการที่สั่ง
			</div>
		</div>

		<!-- modal select sck -->
			<div class="modal fade bd-example-modal-lg" id="SCK" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-lg">			
			    <div class="modal-content">
			      <div class="modal-header">
			        <div class="modal-header-itemname">
			        	ขนมปังโอวีท
			        </div>
			        <div class="modal-header-price">
			        	0.00
			        </div>
			        <div class="modal-header-count1">
			        	<div class="remove">
			        		<button type="button" class="btn btn-danger btn-block"> <i class="fa fa-minus" aria-hidden="true"></i> </button>
			        	</div>
			        	<div class="cnt">
			        		<div class="input-cnt"> 0 </div>
			        	</div>
			        	<div class="add">
			        		<button type="button" class="btn btn-success btn-block"> <i class="fa fa-plus" aria-hidden="true"></i> </button>
			        	</div>
			        </div>
			      </div>
			      <div class="modal-body">
			      	<div class="modal-header-count2">
			        	<div class="remove">
			        		<button type="button" class="btn btn-danger btn-block"> <i class="fa fa-minus" aria-hidden="true"></i> </button>
			        	</div>
			        	<div class="cnt">
			        		<div class="input-cnt"> 0 </div>
			        	</div>
			        	<div class="add">
			        		<button type="button" class="btn btn-success btn-block"> <i class="fa fa-plus" aria-hidden="true"></i> </button>
			        	</div>
			        </div>
			        &nbsp;&nbsp;&nbsp;&nbsp;อื่น ๆ (SCK)
			        <hr style="width: 90%;">
			        <div class="sck-choice">
			        	<div class="sck-list">
			        		<div class="sck-name">
			        			น้ำตาลน้อย
			        		</div>
			        		<div class="sck-price">
			        			0
			        		</div>
			        		<div class="sck-count">
			        			1
			        		</div>
			        	</div>
			        	<div class="sck-list">
			        		<div class="sck-name">
			        			น้ำตาลน้อย
			        		</div>
			        		<div class="sck-price">
			        			0
			        		</div>
			        		<div class="sck-count">
			        			1
			        		</div>
			        	</div>
			        	<div class="sck-list">
			        		<div class="sck-name">
			        			น้ำตาลน้อย
			        		</div>
			        		<div class="sck-price">
			        			0
			        		</div>
			        		<div class="sck-count">
			        			1
			        		</div>
			        	</div>
			        </div>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-danger btn-lg modal-footer-close" @click="close_sck">ปิด</button>
			        <button type="button" class="btn btn-success btn-lg modal-footer-ok">ตกลง</button>
			      </div>
			    </div>	
			  </div>	
			</div>
		<!--  modal select sck  -->

		<!-- modal mobile payment -->
			<div class="modal fade bd-example-modal-lg" id="mobile-payment" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-lg">			
			    <div class="modal-content">
			      <div class="modal-header">
						<div class="payment-netamount">
							<div class="payment-title">
								ยอดรวมสุทธิ
							</div>
							<div class="payment-detail">
								0.00
							</div>
						</div>			        
			      </div>
			      <div class="modal-body">
			      	<div class="mobile-payment">
						<div class="payment-count-order">
							จำนวนรายการ 0 รายการ
							<p>รายการ</p>
						</div>
						<div class="payment-order-list">
							<div class="order-list">
								<div class="order-list-name">
									1. ขนมปังโฮวีท
								</div>
								<div class="order-list-count">
									x 1
								</div>
								<div class="order-list-price">
									40
								</div>
								<div class="order-list-delete">
									<button type="button" class="btn btn-danger" @click="remove_item"> 
										<i class="fa fa-times" aria-hidden="true"></i>
									</button>
								</div>
							</div>
						</div>
						<div class="payment-type">
							<div class="payment-title">
								ประเภทการขาย
							</div>
							<div class="payment-detail">
							<select class="form-control">
						      <option> <i class="fa fa-cutlery" aria-hidden="true"></i> ทานที่ร้าน</option>
						      <option> <i class="fa fa-home" aria-hidden="true"></i> ซื้อกลับบ้าน</option>
						    </select>
							</div>
						</div>
						<div class="payment-discount">
							<div class="payment-title">
								ส่วนลด
							</div>
							<div class="payment-detail">
								<input type="text" class="form-control" id="discount" placeholder="0.00">
							</div>
						</div>
						<div class="payment-netvat">
							<div class="payment-title">
								ภาษีมูลค่าเพิ่ม 7% = 
							</div>
							<div class="payment-detail">
								0.00
							</div>
						</div>
					</div>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-danger btn-lg modal-footer-close" @click="close_mobile_payment">ปิด</button>
			        <button type="button" class="btn btn-success btn-lg modal-footer-ok">ชำระงิน</button>
			      </div>
			    </div>	
			  </div>	
			</div>
		<!--  modal mobile payment  -->
	</div>
</template>

<script src="../js/sale_pos.js"></script>