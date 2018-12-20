// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items:[
					
				]
			},
			aside: {
				self: {},
				items: [
					{
						title: 'Dashboard & Setup',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-squares-2',
						submenu: [
							{
								title: 'Dashboard',
								bullet: 'dot',
								page: '/'
							},
							{
								title: 'Getting Started',
								bullet: 'dot',
								page: '/getstart',
							},
							{
								title: 'Store Information',
								bullet: 'dot',
								page: '/store',
							},
							{
								title: 'Select Template',
								bullet: 'dot',
							},
							{
								title: 'Checkout Options',
								bullet: 'dot',
								submenu: [
									{
									  title: 'Online check options',
									  link: '/',
									},
									{
										title: 'Offline check options',
										link: '/',
									  },
								],
							},
							{
								title: 'Call for Actions',
								bullet: 'dot',
							},
							{
								title: 'Add New Product',
								bullet: 'dot',
							},
							{
								title: 'Category Management',
								bullet: 'dot',
								page :'/categories'
							},
						
							{
								title: 'Locations',
								bullet: 'dot',								
							},
							{
								title: 'Design Home Page',
								bullet: 'dot',								
							},
							{
								title: 'Shipping Profile',
								bullet: 'dot',								
							}
						]
					},
							{
								title: 'Orders & Trends',
								root: true,
								bullet: 'dot',
								icon: 'flaticon-graphic-2',
								submenu: [
									{
										title: 'Payment pending',
										bullet: 'dot',
										page: '/'
									},
									{
										title: 'Authorised',
										bullet: 'dot',
										page: '/',
									},
									{
										title: 'Picklists',
										bullet: 'dot',
									submenu: [
										{
										  title: 'Create picklist',
										  link: '/',
										},
										{
											title: 'Confirm picking',
											link: '/',
										  },
										  {
											title: 'Manage picklist',
											link: '/',
										  },
										  {
											title: 'Bulk picklist',
											link: '/',
										  },
									],
									},
									{
										title: 'Book shipment',
										bullet: 'dot',
										submenu: [
											{
											  title: 'Single shipment',
											  link: '/',
											},
											{
												title: 'Bulk shipment',
												link: '/',
											  },
											]
									},
									{
										title: 'Waiting for pickup',
										bullet: 'dot',
									},
									{
										title: 'Manifest',
										bullet: 'dot',
									},
									{
										title: 'Dispatched',
										bullet: 'dot',
										page :'/categories'
									},
									{
										title: 'Order alert',
										bullet: 'dot',
										page:'/addnewproduct'								
									},
									{
										title: 'Returns',
										bullet: 'dot',								
									},
									{
										title: 'Delivered',
										bullet: 'dot',								
									},
									{
										title: 'Stock Pending',
										bullet: 'dot',								
									}
								]
							},
							{
								title: 'Products',
								root: true,
								bullet: 'dot',
								icon: 'flaticon-box',
								submenu: [
									{
										title: 'Category management',
										bullet: 'dot',
										page: '/'
									},
									{
										title: 'Masters',
										bullet: 'dot',
									submenu: [
										{
										  title: 'Product tags',
										  link: '/',
										},
										{
											title: 'Brands',
											link: '/',
										  },
										  {
											title: 'Bulk variant properties',
											link: '/',
										  },
									],
									},
									{
										title: 'Add New Product',
										bullet: 'dot',
										submenu: [
											{
												title: 'General',
												page: '/product/general'
											},
											{
												title: 'Prices',
												page: '/product/price'
											},
											{
												title: 'Meta Information',
												page: '/product/metainformation'
											},
											{
												title: 'Images',
												page: '/product/images'
											},
											{
												title: 'Active From',
												page: '/product/activefrom'
											},
											{
												title: 'Inventory',
												page: '/product/inventory'
											},
											{
												title: 'Categories',
												page: '/product/categories'
											},
											{
												title: 'Related Products',
												page: '/product/relatedproduct'
											},
											{
												title: 'Up-Sells',
												page: '/product/upsell'
											},
											{
												title: 'Cross-Sells',
												page: '/product/crossells'
											},
											{
												title: 'Products Reviews',
												page: '/product/reviews'
											}
										]
									},
									
									{
										title: 'Product list',
										bullet: 'dot',
									},
									{
										title: 'Bulk tools',
										bullet: 'dot',
										submenu: [
											{
												title: 'Bulk product download',
												page: '/'
											},
											{
												title: 'Bulk product upload',
												page: '/'
											},
											{
												title: 'Bulk bundle product download',
												page: '/'
											},
											{
												title: 'Bulk bundle product upload',
												page: '/'
											},
											{
												title: 'Bulk variant attribute upload',
												page: '/'
											},
											{
												title: 'Bulk product attribute download & upload',
												page: '/'
											},
											{
												title: 'Bulk category attribute',
												page: '/'
											},
											{
												title: 'Bulk imagery content-download',
												page: '/'
											},
											{
												title: 'Bulk imagery content-upload',
												page: 'Bulk imagery content-upload'
											},
											{
												title: 'Missing image report download',
												page: '/'
											},
											{
												title: 'Location wise stock and price download',
												page: '/'
											},
											{
												title: 'Location wise stock and price upload',
												page: '/'
											},
											{
												title: 'Bulk association',
												page: '/'
											},
											{
												title: 'Default data',
												page: '/'
											},
											{
												title: 'Job monitor dashboard',
												page: '/'
											}
										]
									},
									{
										title: 'Cross sell & up sell',
										bullet: 'dot',
										page :'/categories'
									},
									{
										title: 'Product suggestions',
										bullet: 'dot',							
									submenu: [
										{
										title: 'Target block',
										bullet: 'dot'
										},
										{
											title: 'Manage rules',
											bullet: 'dot'
											}
									]						
									},
									{
										title: 'Manage price list',
										bullet: 'dot',								
									},
									{
										title: 'Stock report',
										bullet: 'dot',								
									},
									{
										title: 'vendors',
										bullet: 'dot',								
									},
									{
										title: 'Stock management',
										bullet: 'dot',
										submenu: [
											{
												title: 'Manage & create zones',
												bullet: 'dot',								
											},
											{
												title: 'Bulk shelf upload',
												bullet: 'dot',								
											},
											{
												title: 'Manage & create shelf bins',
												bullet: 'dot',								
											},
											{
												title: 'GRN',
												bullet: 'dot',								
											},
											{
												title: 'GRN bulk upload',
												bullet: 'dot',								
											},
											{
												title: 'Stock movement',
												bullet: 'dot',								
											},
											{
												title: 'Stock movement bulk upload',
												bullet: 'dot',								
											},
											{
												title: 'Stock adjustment',
												bullet: 'dot',								
											},
											{
												title: 'Stock adjustment bulk upload ',
												bullet: 'dot',								
											},
											{
												title: 'Product stock report ',
												bullet: 'dot',								
											},
											{
												title: 'SKU transactions report ',
												bullet: 'dot',								
											}

										]								
									},
									{
										title: 'Deal list',
										bullet: 'dot',
										page: '/'
									},

								]
							},
							{
								title: 'Design & Content',
								root: true,
								bullet: 'dot',
								icon: 'flaticon-edit',
								submenu: [
									{
										title: 'Select layout',
										bullet: 'dot',
										page: '/'
									},
									{
										title: 'Select themes',
										bullet: 'dot',
										page: '/',
									},
									{
										title: 'Design homepage',
										bullet: 'dot'
										},
										{
											title: 'Design webpage',
											bullet: 'dot'
											},
											{
												title: 'Design navigation',
												bullet: 'dot'
												},
												{
													title: 'Manage template',
													bullet: 'dot'
													},
													{
														title: 'File manager',
														bullet: 'dot'
														},
														{
															title: 'ad-hoc forms',
															bullet: 'dot'
															},
															{
																title: 'custom script',
																bullet: 'dot'
																},
																{
																	title: 'css editor',
																	bullet: 'dot'
																	},
																]
							},	
							{
								title: 'Marketing',
								root: true,
								bullet: 'dot',
								icon: 'flaticon-customer',
								submenu: [
									{
										title: 'Gift vouchers',
										bullet: 'dot',
										page: '/'
									},
									{
										title: 'Discount vouchers',
										bullet: 'dot',
										page: '/',
									},
									{
										title: 'Manage promotions',
										bullet: 'dot',
									submenu: [
										{
										  title: 'catalog promotion',
										  link: '/',
										},
										{
											title: 'cart promotion',
											link: '/',
										  },
										  {
											title: 'Bulk promotion upload',
											link: '/',
										  }
									],
									},
									{
										title: 'Mailing list',
										bullet: 'dot',
									},
									{
										title: 'Feeds',
										bullet: 'dot',
	
										submenu: [
											{
											  title: 'Manage feeds',
											  link: '/',
											},
											{
												title: 'category mapping',
												link: '/',
												},
												{
													title: 'Attribute mapping',
													link: '/',
													},
											]
									},
									{
										title: 'Affiliates',
										bullet: 'dot',
									},
									{
										title: 'SMS management',
										bullet: 'dot',
										submenu: [
											{
												title: 'SMS dashboard',
												bullet: 'dot',
											},
											{
												title: 'SMS preferences',
												bullet: 'dot',
											},
											{
												title: 'SMS Reports',
												bullet: 'dot',
											},

										]
									},
									{
										title: 'Loyalty programs',
										bullet: 'dot',
										submenu: [
											{
												title: 'Third party programs',
												bullet: 'dot',
											},
											{
												title: 'Third party reports',
												bullet: 'dot',
											},

										]
									},
									{
										title: 'Webmaster',
										bullet: 'dot',
										page :'/'
									},
									{
										title: 'http redirection',
										bullet: 'dot',
										page:'/'								
									},
									{
										title: 'Blog posts',
										bullet: 'dot',
										submenu: [
											{
												title: 'Social networking sites api setup',
												bullet: 'dot',
											},
											{
												title: 'Post management',
												bullet: 'dot',
											},
											{
												title: 'Banner management',
												bullet: 'dot',
											},
											{
												title: 'Document management',
												bullet: 'dot',
											},
											{
												title: 'Gallery management',
												bullet: 'dot',
											},
											{
												title: 'In Store notifications',
												bullet: 'dot',
											},
											{
												title: 'Cplog settings',
												bullet: 'dot',
											},
											{
												title: 'Bulk gift voucher',
												bullet: 'dot',
											}
					
										]
									},
								]
							},
							{
								title: 'Settings',
								root: true,
								bullet: 'dot',
								icon: 'flaticon-settings',
								submenu: [
									{
										title: 'Tax setup ',
										bullet: 'dot',
									submenu: [
										{
										  title: 'Tax categories',
										  link: '/',
										},
										{
											title: 'Tax zones',
											link: '/',
										  },
										  {
											title: 'Tax codes',
											link: '/',
										  },
										  {
											title: 'Bulk tax code upload',
											link: '/',
										  },
									],
									},
									{
										title: 'Store information',
										bullet: 'dot',
										submenu: [
											{
											  title: 'Address',
											  link: '/',
											},
											{
												title: 'Channel management',
												link: '/',
												},
												{
													title: 'Landmark',
													link: '/',
													},
													{
														title: 'Customer support',
														link: '/',
														},
														{
															title: 'Delivery area',
															link: '/',
															},
															{
																title: 'Locations',
																link: '/',
																},
																{
																	title: 'Bulk delivery area upload & mapping',
																	link: '/',
																	},
											]
									},
									{
										title: 'Application settings',
										bullet: 'dot',
										submenu: [
											{
											  title: 'Store settings',
											  link: '/',
											},
											{
												title: 'Login & registration settings',
												link: '/',
												},
												{
													title: 'Notification services',
													link: '/',
													},
													{
														title: 'Order settings',
														link: '/',
														},
														{
															title: 'Webhooklist',
															link: '/',
															},
															{
																title: 'Checkout settings',
																link: '/',
																},
																{
																	title: 'Image settings',
																	link: '/',
																	},
																	{
																		title: 'SMTP configuration',
																		link: '/',
																		},
																		{
																			title: 'Document series generator',
																			link: '/',
																			},
																			{
																				title: 'Customize order status',
																				link: '/',
																				},
																				{
																					title: 'Widget settings',
																					link: '/',
																					},
											]
									},
									{
										title: 'Localization',
										bullet: 'dot',
									submenu: [
										{
										  title: 'settings',
										  link: '/',
										},
										{
											title: 'Currency setup',
											link: '/',
										  },
										  {
											title: 'language',
											link: '/',
										  }
									],
									},
									{
										title: 'Checkout options',
										bullet: 'dot',
									submenu: [
										{
										  title: 'Online checkout options',
										  link: '/',
										},
										{
											title: 'Offline checkout options',
											link: '/',
										  },
								
									],
									},
									{
										title: 'Call for actions',
										bullet: 'dot',
									},
									{
										title: 'Account details',
										bullet: 'dot',
									},
									{
										title: 'Mail manager',
										bullet: 'dot',
									submenu: [
										{
										  title: 'Email templates',
										  link: '/',
										},
										{
											title: 'Email logs',
											link: '/',
											},
											{
												title: 'Manage communication events',
												link: '/',
												},
								
									],
									},
									{
										title: 'Logistics',
										bullet: 'dot',
									submenu: [
										{
										  title: 'Providers',
										  link: '/',
										},
										{
											title: 'Rules',
											link: '/',
											},
											{
												title: 'Settings',
												link: '/',
												},
								
									],
									},
									{
										title: 'Configure search ',
										bullet: 'dot',
										page :'/'
									},
									{
										title: 'Email setup',
										bullet: 'dot',
										page:'/'								
									},
									{
										title: 'Permissions',
										bullet: 'dot',
									submenu: [
										{
										  title: 'Roles',
										  link: '/',
										},
										{
											title: 'Store operators',
											link: '/',
											},
								
									],
									},
									{
										title: 'Help videos',
										bullet: 'dot',								
									},
									{
										title: 'Priority configuration',
										bullet: 'dot',								
									},
									{
										title: 'Training calendar',
										bullet: 'dot',								
									}
								]
							},	
							{
								title: 'User Profile',
								root: true,
								bullet: 'dot',
								icon: 'flaticon-user',
								submenu: [
									{
										title: 'Customers',
										bullet: 'dot',
										page: '/'
									},
									{
										title: 'Member profile',
										bullet: 'dot',
										page: '/',
									},
									{
										title: 'Abandoned cart',
										bullet: 'dot',
									},
									{
										title: 'Customer segmentation',
										bullet: 'dot',
									},
									{
										title: 'Comment & discussion',
										bullet: 'dot',
									},
									{
										title: 'Shopping lists',
										bullet: 'dot',
									},								
									
								]
							},
							{
								title: 'Apps',
								root: true,
								bullet: 'dot',
								icon: 'flaticon-apps',
								submenu: [
									{
										title: 'App store',
										bullet: 'dot',
										page: '/'
									},
									{
										title: 'Location awareness',
										bullet: 'dot',
										page: '/',
									},						
								]
							},																																		
																										
				]
		}
	}
	}}