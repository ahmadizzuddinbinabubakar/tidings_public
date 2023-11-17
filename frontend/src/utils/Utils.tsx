
//get time since published
export function timeSince(date: Date) {
    var seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + "y ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + "mo ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + "d ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + "h ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + "m ago";
    }
    return Math.floor(seconds) + "s ago";
  }

  //handler for unsupported image type
  export function imageHandler(img: string, defImg: string) {
    
    if(img) {
      if(img.endsWith(".svg") || !img.startsWith("http")) {
        return 'http://localhost:1337'+defImg;
      }
      return img;
    } else {
      return 'http://localhost:1337'+defImg;
    }
  }