<?php
return [
    'settings' => [
        'Core.Encoding' => 'utf-8',
        'Cache.SerializerPath' => storage_path('purify'),
        'HTML.Doctype' => 'XHTML 1.0 Strict',
        'HTML.Allowed' => 'h1,h2,h3,h4,h5,h6,b,strong,i,em,a[href|title],ul,ol,li,p[style],br,span,img[width|height|alt|src]',
        'HTML.ForbiddenElements' => '',
        'CSS.AllowedProperties' => 'font,font-size,font-weight,font-style,font-family,text-decoration,padding-left,color,background-color,text-align',
        'AutoFormat.AutoParagraph' => false,
        'AutoFormat.RemoveEmpty' => false,
    ],
];
