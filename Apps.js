    function HLbold() {
        document.execCommand("bold");
    }
    function HLitalic() {
        document.execCommand("italic");
    }
    function HLunderline() {
        document.execCommand("underline");
    }
    function centerAlign() {
        document.execCommand("justifyCenter");
    }
    function justify() {
        document.execCommand("justifyFull");
    }
    function leftAlign() {
        document.execCommand("justifyLeft");
    }
    function rightAlign() {
        document.execCommand("justifyRight");
    }
    function undo() {
        document.execCommand("undo");
    }
    function redo() {
        document.execCommand("redo");
    }
    function addul() {
        document.execCommand("insertUnorderedList");
    }
    function addol() {
        document.execCommand("insertOrderedList");
    }
    function subscript() {
        document.execCommand("subscript");
    }
    function superscript() {
        document.execCommand("superscript");
    }

    function imagebox() {
        document.querySelector(".floating-box").style.display = "block";
    }

    const Editor = document.getElementById("Editor")

    function insertImages(img) {
        const imagenode = document.createElement("img");
        imagenode.setAttribute("src", img);
        imagenode.classList.add("fix-image");
        Editor.appendChild(imagenode);
        clse();
    }

    function passimage() {
        var img = document.getElementById("ImageUrlSource").value;
        insertImages(img);
    }



    function size(n) {
        var sel = document.getSelection();
        var range = new Range;
        var txt;
        range.setStart(sel.anchorNode, sel.anchorOffset);
        range.setEnd(sel.focusNode, sel.focusOffset);
        txt = sel;
        var newspan = document.createElement("span");
        newspan.textContent = txt;
        newspan.style.fontSize = n + "px";

        range.deleteContents();
        sel.deleteFromDocument()
        range.insertNode(newspan);
        range.selectNode(newspan);
    }

    function colorchange(color) {
        var sel = document.getSelection();
        var range = new Range;
        var txt;
        range.setStart(sel.anchorNode, sel.anchorOffset);
        range.setEnd(sel.focusNode, sel.focusOffset);
        txt = sel;
        var newspan = document.createElement("span");
        newspan.textContent = txt;
        newspan.style.color = color;

        range.deleteContents();
        sel.deleteFromDocument()
        range.insertNode(newspan);
        range.selectNode(newspan);
    }

    function colorchangebg(color) {
        var sel = document.getSelection();
        var range = new Range;
        var txt;
        range.setStart(sel.anchorNode, sel.anchorOffset);
        range.setEnd(sel.focusNode, sel.focusOffset);
        txt = sel;
        var newspan = document.createElement("span");
        newspan.textContent = txt;
        newspan.style.background = color;

        range.deleteContents();
        sel.deleteFromDocument()
        range.insertNode(newspan);
        range.selectNode(newspan);
    }








    function HLcraetelink(event) {

        var linkURL = prompt('Enter a URL:', 'http://');
        var sText = document.getSelection();
        document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');

    }
    function unlink() {
        document.execCommand("unlink");

    }


    function addh1() {
        var h = window.getSelection();
        document.execCommand('insertHTML', false, '<h1 class="heading" style="margin:5px; text-align:center;">' + h + '</h1>');
    }
    function addh2() {
        var h = window.getSelection();
        document.execCommand('insertHTML', false, '<h2 class="heading" style="margin:8px; text-align:center;">' + h + '</h2>');
    }

    function print() {
        var title = document.getElementById("Post-Title").value;
        var edit = document.getElementById("Editor").innerHTML;
        document.querySelector(".reflect").innerHTML = "<h1 class=\"heading\" align=\"center\">" + title + "</h1>" + "<br>" + edit;
    }

    function clse() {
        document.querySelector(".floating-box").style.display = "none";
    }

