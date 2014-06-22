<?php
/*
Plugin Name: Rikki's WP Social Icons
Plugin URI: http://rikkimongoose.ru/projects/rikkis-wp-social-icons/
Description: Insert social icons to your Wordpress posts.
Version: 1.1.1
Author: Rikki Mongoose
Author URI: http://github.com/rikkimongoose/
*/
/*  Copyright 2012  Rikki Mongoose  (email : alexander.a.teut@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
class socialusers
{
	var $options = array(
		"blogspot" => "http://%s.blogspot.com/",
		"ljuser" => "http://%s.livejournal.com/",
		"ljcomm" => "http://livejournal.com/community/%s",
		"liruboy" => "http://www.liveinternet.ru/users/%s/",
		"lirugirl" => "http://www.liveinternet.ru/users/%s/",
		"vk" => "http://vk.com/%s",
		"twitter" => "http://twitter.com/#!/%s/",
		"facebook" => "http://www.facebook.com/%s",
		"google_plus" => "https://plus.google.com/%s",
		"wordpress" => "http://%s.wordpress.com/",
		"habrahabr" => "http://%s.habrahabr.ru/",
		"github" => "http://github.com/users/%s/"
	);
	function socialusers(){
		if (!function_exists ('add_shortcode') ) return;
		add_shortcode('userid', array (&$this, 'icon_func') );
		add_filter( 'mce_buttons_3', array(&$this, 'mce_buttons') );
		add_filter( 'mce_external_plugins', array(&$this, 'mce_external_plugins') );
	}
	function icon_func($atts, $content="") {
		if (!$content)
			return "";
		extract( shortcode_atts ( array('id' => null, 'type' => null, 'url' => null), $atts ) );
		if (!$type || !array_key_exists($type, $this->options) )
			return $content;
		if (!$id)
			$id = $content;
		$userinfo_url = esc_url(($url) ? $url : sprintf($this->options[$type], trim($id)));
		$userpic_url = esc_url(plugins_url( "js/img/$type.gif" , __FILE__ ));
		return "<span style='white-space: nowrap; display: inline !important;'><a href='$userinfo_url' ref='nofollow'><img src='$userpic_url' alt='[info]' width='17' height='17' style='vertical-align: bottom; border: 0; padding-right: 1px;vertical-align:middle; margin-left: 0; margin-top: 0; margin-right: 0; margin-bottom: 0;' /></a><a href='$userinfo_url' ref='nofollow'><b>$content</b></a></span>";
	}
	function mce_external_plugins($plugin_array) {
		$plugin_array['rikkisocialicons'] = plugins_url ('js/rikkis-wp-social-icons-editor_plugin.js', __FILE__ );
		return $plugin_array;
	}
	function mce_buttons($buttons) {
		return array_merge($buttons, array_keys($this->options));
	}
}
$socialusers = new socialusers();
?>
