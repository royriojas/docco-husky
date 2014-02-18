#!/bin/sh

if [ -n "`hash perl 2>&1`" ]; then 
	echo "Perl is required for cloc but not installed!"
fi
