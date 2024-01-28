<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Updates extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        // Blog
        if (!Schema::hasTable('affiliates_commissions')) {
            Schema::create('affiliates_commissions', function (Blueprint $table) {
                $table->id();
                $table->integer('user_id')->nullable();
                $table->integer('referred_user_id')->nullable();
                $table->integer('payment_id')->nullable();
                $table->integer('plan_id')->nullable();
                $table->float('amount', 16, 2)->nullable();
                $table->string('currency')->nullable();
                $table->integer('is_withdrawn')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('affiliates_withdrawals')) {
            Schema::create('affiliates_withdrawals', function (Blueprint $table) {
                $table->id();
                $table->integer('user_id')->nullable();
                $table->float('amount', 16, 2)->nullable();
                $table->string('currency')->nullable();
                $table->longText('note')->nullable();
                $table->longText('ids')->nullable();
                $table->integer('is_paid')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('sandy_webhook')) {
            Schema::create('sandy_webhook', function (Blueprint $table) {
                $table->id();
                $table->string('key')->nullable();
                $table->string('method')->nullable();
                $table->longText('function')->nullable();
                $table->longText('settings')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('audience')) {
            Schema::create('audience', function (Blueprint $table) {
                $table->id();
                $table->integer('user')->nullable();
                $table->integer('page_id');
                $table->string('name')->nullable();
                $table->longText('tags')->nullable();
                $table->longText('contact')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('page_conversations')) {
            Schema::create('page_conversations', function (Blueprint $table) {
                $table->id();
                $table->integer('page_id');
                $table->integer('user_id');
                $table->integer('status')->default(1);
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('page_messages')) {
            Schema::create('page_messages', function (Blueprint $table) {
                $table->id();
                $table->integer('conversation_id');
                $table->integer('page_id');
                $table->integer('from_user_id')->nullable();
                $table->integer('to_user_id')->nullable();
                $table->longText('message')->nullable();
                $table->string('status')->default('new');
                $table->string('link')->nullable();
                $table->string('image')->nullable();
                $table->string('seen')->default(0);
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('audience_notes')) {
            Schema::create('audience_notes', function (Blueprint $table) {
                $table->id();
                $table->integer('page_id');
                $table->integer('audience_id');
                $table->longText('note')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('audience_activity')) {
            Schema::create('audience_activity', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('audience_id');
                $table->string('type')->nullable();
                $table->string('message')->nullable();
                $table->string('ip')->nullable();
                $table->string('os')->nullable();
                $table->string('browser')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('live_streamings')) {
            Schema::create('live_streamings', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->string('name')->nullable();
                $table->text('channel')->nullable();
                $table->integer('status')->default(0)->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('live_comments')) {
            Schema::create('live_comments', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('live_streamings_id');
                $table->text('comment')->nullable();
                $table->integer('joined')->default(1)->nullable();
                $table->integer('tip')->default(0)->nullable();
                $table->integer('tip_amount')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('live_online_users')) {
            Schema::create('live_online_users', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('live_streamings_id');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('live_likes')) {
            Schema::create('live_likes', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('live_streamings_id');
                $table->timestamps();
            });
        }
        

        if (!Schema::hasTable('posts_comments')) {
            Schema::create('posts_comments', function (Blueprint $table) {
                $table->id();
                $table->integer('post_id')->nullable();
                $table->integer('posted_by')->nullable();
                $table->integer('parent_id')->nullable();
                $table->longText('data')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('user_posts')) {
            Schema::create('user_posts', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('watermark')->nullable()->default(0);
                $table->string('visibility')->nullable()->default('public');
                $table->longText('description')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        Schema::table('user_posts', function (Blueprint $table) {
            if (!Schema::hasColumn('user_posts', 'owner_id')) {
                $table->integer('owner_id')->after('user')->nullable();
            }
        });

        if (!Schema::hasTable('user_posts_media')) {
            Schema::create('user_posts_media', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('post_id');
                $table->string('media')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('sandy_embed_store')) {
            Schema::create('sandy_embed_store', function (Blueprint $table) {
                $table->id();
                $table->string('link')->nullable();
                $table->longText('data')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('plans_history')) {
            Schema::create('plans_history', function (Blueprint $table) {
                $table->id();
                $table->integer('plan_id');
                $table->integer('user_id');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('plan_payments')) {
            Schema::create('plan_payments', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->string('name')->nullable();
                $table->string('plan')->nullable();
                $table->string('plan_name')->nullable();
                $table->string('duration')->nullable();
                $table->string('email')->nullable();
                $table->string('ref')->nullable();
                $table->string('currency')->nullable();
                $table->float('price', 16, 2)->nullable();
                $table->string('gateway')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('pending_plan')) {
            Schema::create('pending_plan', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('status')->default(0);
                $table->string('email')->nullable();
                $table->string('name')->nullable();
                $table->string('ref')->nullable();
                $table->integer('plan')->nullable();
                $table->string('duration')->nullable();
                $table->longText('info')->nullable();
                $table->string('method')->default('bank');
                $table->timestamps();
            });
        }

        // Payment spv

        if (!Schema::hasTable('payments_spv')) {
            Schema::create('payments_spv', function (Blueprint $table) {
                $table->id();
                $table->string('sxref')->nullable();
                $table->string('email')->nullable();
                $table->string('currency')->nullable();
                $table->integer('status')->default(0);
                $table->integer('is_paid')->default(0);
                $table->float('price', 16, 2)->nullable();
                $table->string('method')->nullable();
                $table->string('method_ref')->nullable();
                $table->string('callback')->nullable();
                $table->longText('keys')->nullable();
                $table->longText('meta')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('payments_spv_history')) {
            Schema::create('payments_spv_history', function (Blueprint $table) {
                $table->id();
                $table->integer('spv_id')->nullable();
                $table->integer('status')->default(0);
                $table->string('method')->nullable();
                $table->string('method_ref')->nullable();
                $table->longText('method_data')->nullable();
                $table->timestamps();
            });
        }



        if (!Schema::hasTable('yetti_spv')) {
            Schema::create('yetti_spv', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('payee_user_id')->nullable();
                $table->string('sxref')->nullable();
                $table->string('email')->nullable();
                $table->string('currency')->nullable();
                $table->integer('is_paid')->default(0);
                $table->float('price', 16, 2)->nullable();
                $table->float('split_price', 16, 2)->nullable();
                $table->string('method')->nullable();
                $table->string('method_ref')->nullable();
                $table->string('callback')->nullable();
                $table->longText('meta')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('yetti_spv_history')) {
            Schema::create('yetti_spv_history', function (Blueprint $table) {
                $table->id();
                $table->string('spv_id')->nullable();
                $table->integer('status')->default(0);
                $table->string('method')->nullable();
                $table->string('method_ref')->nullable();
                $table->longText('payload_data')->nullable();
                $table->timestamps();
            });
        }
        

        if (!Schema::hasTable('highlights')) {
            Schema::create('highlights', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->longText('thumbnail')->nullable();
                $table->integer('is_element')->nullable();
                $table->integer('element')->nullable();
                $table->string('link')->nullable();
                $table->longText('content')->nullable();
                $table->integer('position')->default(0);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('highlight_comments')) {
            Schema::create('highlight_comments', function (Blueprint $table) {
                $table->id();
                $table->integer('user');
                $table->integer('highligh_id');
                $table->text('comment')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('visitors')) {
            Schema::create('visitors', function (Blueprint $table) {
                $table->id();
                $table->integer('user')->nullable();
                $table->string('slug')->nullable();
                $table->string('session')->nullable();
                $table->string('ip')->nullable();
                $table->longText('tracking')->nullable();
                $table->integer('views')->default(0);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('user_upload_paths')) {
            Schema::create('user_upload_paths', function (Blueprint $table) {
                $table->id();
                $table->integer('user')->nullable();
                $table->text('path')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('linker_track')) {
            Schema::create('linker_track', function (Blueprint $table) {
                $table->id();
                $table->integer('linker')->nullable();
                $table->integer('user')->nullable();
                $table->string('session')->nullable();
                $table->string('link')->nullable();
                $table->string('slug')->nullable();
                $table->string('ip')->nullable();
                $table->longText('tracking')->nullable();
                $table->integer('views')->default(1);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('user_coupon_codes')) {
            Schema::create('user_coupon_codes', function (Blueprint $table) {
                $table->id();
                $table->integer('user')->nullable();
                $table->integer('product')->nullable();
                $table->string('code')->nullable();
                $table->string('type')->nullable();
                $table->dateTime('start_date')->nullable();
                $table->date('end_date')->nullable();
                $table->integer('discount')->default(0);
                $table->longText('settings')->nullable();
                $table->timestamps();
            });
        }
        
        if (!Schema::hasTable('user_coupon_history')) {
            Schema::create('user_coupon_history', function (Blueprint $table) {
                $table->id();
                $table->integer('user')->nullable();
                $table->integer('coupon_id')->nullable();
                $table->longText('settings')->nullable();
                $table->timestamps();
            });
        }
        
        if (Schema::hasTable('product_shipping_locations')) {
            Schema::table('product_shipping_locations', function (Blueprint $table) {
                if (!Schema::hasColumn('product_shipping_locations', 'country_iso')) {
                    $table->string('country_iso')->after('extra')->nullable();
                }
                if (!Schema::hasColumn('product_shipping_locations', 'country')) {
                    $table->string('country')->after('extra')->nullable();
                }
            });
        }

        if (Schema::hasTable('product_options')) {
            Schema::table('product_options', function (Blueprint $table) {
                if (!Schema::hasColumn('product_options', 'type')) {
                    $table->string('type')->after('position')->nullable();
                }
                if (!Schema::hasColumn('product_options', 'image')) {
                    $table->string('image')->after('position')->nullable();
                }
                if (!Schema::hasColumn('product_options', 'extra')) {
                    $table->longText('extra')->after('position')->nullable();
                }
                if (!Schema::hasColumn('product_options', 'variation_value')) {
                    $table->string('variation_value')->after('position')->nullable();
                }
            });
        }

        if (Schema::hasTable('products')) {
            Schema::table('products', function (Blueprint $table) {
                if (!Schema::hasColumn('products', 'featured_img')) {
                    $table->string('featured_img')->after('banner')->nullable();
                }
            });
        }

        // Updates
        Schema::table('linker', function (Blueprint $table) {
            if (!Schema::hasColumn('linker', 'user')) {
                $table->integer('user')->nullable();
            }
        });

        if (!Schema::hasTable('subscription_due')) {
            Schema::create('subscription_due', function (Blueprint $table) {
                $table->id();
                $table->integer('page_id');
                $table->integer('user_id');
                $table->dateTime('due')->nullable();
                $table->dateTime('last_charged')->nullable();
                $table->longText('settings')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('wallet_withdrawals')) {
            Schema::create('wallet_withdrawals', function (Blueprint $table) {
                $table->id();
                $table->integer('user_id')->nullable();
                $table->string('_id')->nullable();
                $table->float('amount', 16, 2)->nullable();
                $table->longText('note')->nullable();
                $table->integer('is_paid')->nullable();
                $table->integer('api_transfered')->default(0);
                $table->longText('transaction')->nullable();
                $table->longText('extra')->nullable();
                $table->timestamps();
            });
        }

        
        // Users
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'aff_key')) {
                $table->string('aff_key')->after('booking')->nullable();
            }
            if (!Schema::hasColumn('users', 'banner')) {
                $table->string('banner')->after('background_settings')->nullable();
            }
            if (!Schema::hasColumn('users', 'aff_referred_by')) {
                $table->integer('aff_referred_by')->after('aff_key')->nullable();
            }
            if (!Schema::hasColumn('users', 'aff_has_converted')) {
                $table->integer('aff_has_converted')->after('aff_key')->default(0);
            }
            if (!Schema::hasColumn('users', 'store')) {
                $table->longText('store')->after('settings')->nullable();
            }
            if (!Schema::hasColumn('users', 'message')) {
                $table->longText('message')->after('settings')->nullable();
            }
            if (!Schema::hasColumn('users', 'subscription')) {
                $table->longText('subscription')->after('settings')->nullable();
            }
            if (!Schema::hasColumn('users', 'payments')) {
                $table->longText('payments')->after('settings')->nullable();
            }
            if (!Schema::hasColumn('users', 'lastCountry')) {
                $table->string('lastCountry')->after('lastAgent')->nullable();
            }
            if (!Schema::hasColumn('users', 'api')) {
                $table->string('api')->after('lastCountry')->unique()->nullable();
            }
            if (!Schema::hasColumn('users', 'avatar_settings')) {
                $table->longText('avatar_settings')->after('avatar')->nullable();
            }
            if (!Schema::hasColumn('users', 'phone_number')) {
                $table->longText('phone_number')->after('lastCountry')->nullable();
            }
            if (!Schema::hasColumn('users', 'last_login')) {
                $table->string('last_login')->after('lastCountry')->nullable();
            }
            if (!Schema::hasColumn('users', 'last_seen')) {
                $table->dateTime('last_seen')->after('lastCountry')->nullable();
            }
            if (!Schema::hasColumn('users', 'is_model')) {
                $table->integer('is_model')->after('last_seen')->default(0);
            }
        });

        // Plans
        Schema::table('plans', function (Blueprint $table) {
            if (!Schema::hasColumn('plans', 'position')) {
                $table->integer('position')->after('settings')->default(0);
            }
            if (!Schema::hasColumn('plans', 'price_type')) {
                $table->string('price_type')->after('settings')->default('price');
            }
            if (!Schema::hasColumn('plans', 'defaults')) {
                $table->integer('defaults')->after('settings')->default(0);
            }
            if (!Schema::hasColumn('plans', 'extra')) {
                $table->longText('extra')->after('settings')->nullable();
            }
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
