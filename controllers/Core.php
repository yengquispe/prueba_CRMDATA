<?php
class Site{
	public function view($page){
		$urlpage='./views/'.$page.'.php';
		require_once($urlpage);
	}
}
?>