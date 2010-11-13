function Countdown()
{
    this.start_time = "25:00";
    this.end_time = "0:00";
    this.target_id = "countdown_timer";
    this.paused = true;
    this.name = 'timer';
}

Countdown.prototype.update_target = function()
{
    minutes = this.minutes;
    seconds = this.seconds;
    if(seconds < 10) seconds = "0" + seconds;
    $("#" + this.target_id).val(minutes + ":" + seconds);
}

Countdown.prototype.pause = function()
{
    this.paused = true
}

Countdown.prototype.resume = function()
{
    this.resume = true
}

Countdown.prototype.init = function()
{
    this.reset();
    setInterval(this.name + '.tick()', 1000);
}

Countdown.prototype.tick = function()
{
    if(!this.paused && !(this.seconds <= 0 && this.minutes <=0)){
        this.seconds = this.seconds - 1;
        if(this.seconds <= 0 && this.minutes > 0){
            this.minutes--;
            this.seconds = 59;
        }
    }
    this.update_target();
}

Countdown.prototype.start = function()
{
    this.reset();
    this.paused = false;
}

Countdown.prototype.reset = function(time)
{
    time_ary = this.start_time.split(":");
    this.minutes = parseInt(time_ary[0]);
    this.seconds = parseInt(time_ary[1]);
    this.update_target();
}
