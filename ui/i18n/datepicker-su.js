/* Sundanese (Basa Sunda) initialisation for the jQuery UI date picker plugin. */
/* Written by Sindu Tama (sindutama4@gmx.com) */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['su'] = {
	closeText: 'Tutup',
	prevText: '&#x3C;munur',
	nextText: 'maju&#x3E;',
	currentText: 'dinten ieu',
	monthNames: ['Januari','Februari','Maret','April','Mei','Juni',
	'Juli','Agustus','September','Oktober','Nopember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Agus','Sep','Okt','Nop','Des'],
	dayNames: ['Mingu','Senen','Salasa','Rebo','Kemis','Jumaah','Saptu'],
	dayNamesShort: ['Min','Sen','Sel','Reb','kem','Jum','Sap'],
	dayNamesMin: ['Mg','Sn','Sl','Rb','Km','Jm','Sp'],
	weekHeader: 'Mg',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['su']);

return datepicker.regional['su'];

}));
