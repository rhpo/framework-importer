var importer = new Object()
importer.imported = new Object();
importer.imported.css, importer.imported.js = '';


importer.js = async function imp(cdn = '') {
    if (!cdn) {
        return console.log('%cError! | Please specify the CDN for the JS Importing.', 'color:red;font-weight: bolder;font-size: 15px;');
        return false;
    }

    if (!cdn.startsWith("http") && !cdn.includes('://')) {
        console.log('%cError! | Please Specify a valid CDN URL link for the JS Importing.', 'color:red;font-weight: bolder;font-size: 15px;');
        return false;
    }

    var moduleJS, moduleName;
    try {
        fetch(cdn).then(bytes => bytes.text()).then(_module => moduleJS = _module);
    }
    catch
    {
        console.log('%cError! | Your JS Module cannot be imported for Network/Security reasons...', 'color:red;font-weight: bolder;font-size: 15px;');
        return false;
    }
    try {
        try {
            eval(moduleJS);
            moduleName = cdn.split('/')[cdn.split('/').length - 1];
        }
        catch
        {
            try {
                var script = document.createElement('script');
                script.src = cdn;
                script.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            catch
            {
                console.log('%cError! | Your JS Module cannot be imported for Network/Security reasons...', 'color:red;font-weight: bolder;font-size: 15px;');
                return false;
            }
        }
        console.log('%cSuccess! | Imported ' + moduleName + ' Successfully.', 'color:green;font-weight: bolder;font-size: 15px;');
        return true;
    }
    catch (bUG) {
        console.log('%cError! | Your imported JS Module has some errors, they will be displayed below...', 'color:red;font-weight: bolder;font-size: 15px;');
        console.error(bUG.toString());
        return false;
    }
}

importer.css = async function imp_css(cdn = '') {
    if (!cdn) {
        console.log('%cError! | Please specify the CDN for the CSS Importing.', 'color:red;font-weight: bolder;font-size: 15px;');
        return false;
    }

    if (!cdn.startsWith("http") && !cdn.includes('://')) {
        console.log('%cError! | Please Specify a valid CDN URL link for the CSS Importing.', 'color:red;font-weight: bolder;font-size: 15px;');
        return false;
    }

    var moduleCSS, moduleName_CSS;
    try {
        fetch(cdn).then(bytes => bytes.text()).then(_module => moduleCSS = _module);
    }
    catch
    {
        return console.log('%cError! | Your CSS Module cannot be imported for Network/Security reasons...', 'color:red;font-weight: bolder;font-size: 15px;');
        return false;
    }
    try {
        try {
            if (importer.imported.css.includes(moduleCSS))
            {
                console.warn('%cWarning! | Your CSS Module cannot be imported because it is already / or the CSS Code is null...', 'color:red;font-weight: bolder;font-size: 15px;');
                return false;
            }
            else
            {
                importer.imported.css += moduleCSS;
            }
            
            moduleName_CSS = cdn.split('/')[cdn.split('/').length - 1];
            // Create new style Element
            var style = document.createElement('style');
            style.innerHTML = '/* ' + moduleName_CSS + ' */\n' + moduleCSS;
            document.head.appendChild(style);
        }
        catch
        {
            console.log('%cError! | Your CSS Module cannot be imported for Network/Security reasons...', 'color:red;font-weight: bolder;font-size: 15px;');
            return false;
        }
        console.log('%cSuccess! | Imported ' + moduleName_CSS + ' Successfully (CSS).', 'color:green;font-weight: bolder;font-size: 15px;');
        return true;
    }
    catch (bUG) {
        console.log('%cError! | Your imported CSS Module has some errors, they will be displayed below...', 'color:red;font-weight: bolder;font-size: 15px;');
        console.error(bUG.toString());
        return false;
    }
}
